import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/services/http/schedule.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ScheduleRecord } from 'src/app/model/schedule-record';
import { ScheduleEditComponent } from './schedule-edit/schedule-edit.component';
import { FormControl } from '@angular/forms';
import { Schedule } from 'src/app/model/schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  displayedColumns = ['fullName', 'position', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14',
   '15', '16', '17', '18', '19', '20'];
  dataSource = new MatTableDataSource();
  month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  date = new FormControl('');
  scheduleList;



  constructor(
    private scheduleHttp: ScheduleService,
    public dialog: MatDialog,
  ) {

   }

  ngOnInit() {
    this.scheduleHttp.getScheduleList().subscribe(date => {
      console.log(date);
      this.scheduleList = date;
    });
  }



  refresh() {
    console.log(this.toDate());

    this.scheduleHttp.getScheduleSummaryByMonth(this.toDate())
      .subscribe(result => {
        this.dataSource.data = result;
      });
  }

  toDate() {
    // tslint:disable-next-line: max-line-length
    return this.date.value.getFullYear() + '-' + ('0' + (this.date.value.getMonth() + 1)).slice(-2) + '-' + ('0' + this.date.value.getDate()).slice(-2);
  }

  testDate(day) {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();

    return new Date(year, month, day);
  }

  scheduleDialog(name: string, schedule: ScheduleRecord): void {
    const dialogRef = this.dialog.open(ScheduleEditComponent, {
      disableClose: true,
      width: '800px',
      data: {fullName: name, record: schedule }
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Zaktualizowano grafik');

      // TODO zmienić
      this.refresh();
    });

  }
}
