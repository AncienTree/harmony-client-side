import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ScheduleService } from 'src/app/services/http/schedule.service';
import { MatTableDataSource, MatDialog, MatSort, MatSelect } from '@angular/material';
import { ScheduleRecord } from 'src/app/model/schedule-record';
import { ScheduleEditComponent } from './schedule-edit/schedule-edit.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort, null) sort: MatSort;

  displayedColumns = ['fullName', 'position', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14',
    '15', '16', '17', '18', '19', '20'];
  dataSource;
  month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  scheduleList;

  constructor(
    private scheduleHttp: ScheduleService,
    public dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.scheduleHttp.getScheduleList().subscribe(date => {
      console.log(date);
      this.scheduleList = date;
    });
  }

  ngAfterViewInit() {

  }

  refresh(data) {
    if (!( typeof data === 'undefined')) {
      this.scheduleHttp.getScheduleSummaryByMonth(data)
        .subscribe(result => {
          this.dataSource = new MatTableDataSource(result);
         // this.dataSource.data = result;
          this.dataSource.sort = this.sort;
        });
    }
  }

  scheduleDialog(name: string, schedule: ScheduleRecord): void {
    const dialogRef = this.dialog.open(ScheduleEditComponent, {
      disableClose: true,
      width: '800px',
      data: { fullName: name, record: schedule }
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Zaktualizowano grafik');

      // TODO zmienić
      // this.refresh();
    });

  }
}
