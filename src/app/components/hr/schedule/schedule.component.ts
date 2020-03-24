import { Component, OnInit, ViewChild } from '@angular/core';
import { ScheduleService } from 'src/app/services/http/schedule.service';
import { MatTableDataSource, MatDialog, MatSort } from '@angular/material';
import { ScheduleRecord } from 'src/app/model/schedule-record';
import { ScheduleEditComponent } from './schedule-edit/schedule-edit.component';

import * as moment from 'moment';
import { ScheduleSummary } from 'src/app/model/schedule-summary';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  @ViewChild(MatSort, null) sort: MatSort;

  hidden = false;
  displayedColumns = ['fullName', 'position'];
  month = [];
  selectedDate;
  dataSource;
  scheduleList;
  status = ['wg. dyspozycyjności', 'wg. dostępności', 'wg. grafiku', 'wg. zalogowania', 'wg. jitsi', 'wg. obecności', 'wg. dzwonienia'];

  constructor(
    private scheduleHttp: ScheduleService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.scheduleHttp.getScheduleList().subscribe(date => {
      this.scheduleList = date;
    });
  }

  refresh(date) {
    // Restart kolumn
    this.displayedColumns = ['fullName', 'position', 'status'];
    this.month = [];

    if (!(typeof date === 'undefined')) {
      // Dodanie kolumn względem daty.
      this.month = Array(this.getNumberDays(date)).fill(0).map((x, i) => i + 1);
      for (let index = 1; index <= this.month.length; index++) {
        this.displayedColumns.push(index.toString());
      }

      this.selectedDate = date;
      this.hidden = true;
      // Pobieranie danych z serwera
      this.scheduleHttp.getScheduleSummaryByMonth(date)
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
      width: '500px',
      data: { fullName: name, record: schedule }
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Zaktualizowano grafik');

      // TODO zmienić
      // this.refresh();
    });
  }

  getNumberDays(date): number {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);

    return new Date(year, month, 0).getDate();
  }

  createDayFromHeader(day) {
    const year = this.selectedDate.slice(0, 4);
    const month = this.selectedDate.slice(5, 7);

    return new Date(year, month - 1, day);
  }

  // Zwaraca dla soboty 1 a dla niedzieli 2
  checkWeekend(day) {
    const date = this.createDayFromHeader(day);
    if (date.getDay() === 6) {
      return '#F0E68C';
    } else if (date.getDay() === 0) {
      return '#DC143C';
    } else {
      return '#FFFFFF';
    }
  }

  transformDate(day, records: ScheduleSummary) {
    const date: string = moment(this.createDayFromHeader(day)).format('YYYY-MM-DD').toString();

    const record = records.scheduleRecords.find(x => x.workDate === date);

    if (!(typeof(record) === 'undefined')) {
      return record;
    } else {
      return undefined;
    }
  }
}

