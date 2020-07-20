import { Component, OnInit, ViewChild } from '@angular/core';
import { ScheduleService } from 'src/app/services/http/schedule.service';
import { MatTableDataSource, MatDialog, MatSort } from '@angular/material';
import { ScheduleEditComponent } from './schedule-edit/schedule-edit.component';

import * as moment from 'moment';
import { ScheduleSummary } from 'src/app/model/schedule-summary';
import { Status } from 'src/app/utiles/status';
import { Schedule } from 'src/app/model/schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  @ViewChild(MatSort, null) sort: MatSort;

  hidden = false;
  displayedColumns = ['fullName', 'position', 'userLine', 'userSection', 'fte'];
  months = [];
  selectedDate;
  dataSource;
  scheduleList;
  selectedSchedule: Schedule;
  scheduleStatus = [];
  selectedStatus = 'OBEC';

  constructor(
    private scheduleHttp: ScheduleService,
    public dialog: MatDialog,
    private stat: Status,
  ) {
    this.scheduleStatus = this.stat.getStatus();
  }

  ngOnInit() {
    this.scheduleHttp.getScheduleList().subscribe(date => {
      this.scheduleList = date;
    });
  }

  refresh(date) {
    // Restart kolumn
    this.displayedColumns = ['fullName', 'position', 'userLine', 'userSection', 'fte'];
    this.months = [];

    if (!(typeof date === 'undefined')) {
      // Dodanie kolumn względem daty.
      this.months = Array(this.getNumberDays(date)).fill(0).map((x, i) => i + 1);
      for (let index = 1; index <= this.months.length; index++) {
        this.displayedColumns.push(index.toString());
      }
      this.selectedDate = date;
      this.selectedSchedule = this.scheduleList.find(x => x.scheduleDate === date);

      // Pobieranie danych z serwera
      this.scheduleHttp.getScheduleSummaryByMonthAndStatus(date, this.selectedStatus)
        .subscribe(result => {
          this.dataSource = new MatTableDataSource(result);
          this.dataSource.sort = this.sort;
          this.hidden = true;
        });
    }
  }

  scheduleDialog(employee, day): void {
    const startWork = new Date(employee.startWorkDate);
    const dayFromHeader = this.createDayFromHeader(day);
    const utcStartWork = new Date(startWork.getTime() + startWork.getTimezoneOffset() * 60000);

    if (dayFromHeader >= utcStartWork) {
      const date: string = moment(dayFromHeader).format('YYYY-MM-DD').toString();
      const dialogRef = this.dialog.open(ScheduleEditComponent, {
        disableClose: true,
        // width: '500px',
        data: {
          simpleEmployee: employee,
          recordDate: date
        }
      });

      dialogRef.afterClosed().subscribe(() => {
        // TODO zmienić
        // this.refresh();
      });
    }
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

  // Zwaraca kolor dla soboty oraz niedzieli
  checkWeekend(day) {
    const date = this.createDayFromHeader(day);
    if (this.isDayOff(date) || date.getDay() === 0) {
      return '#DC143C';
    } else if (date.getDay() === 6) {
      return '#F0E68C';
    } else {
      return '#FFFFFF';
    }
  }

  transformDate(day, records: ScheduleSummary) {
    const date: string = moment(this.createDayFromHeader(day)).format('YYYY-MM-DD').toString();
    const record = records.scheduleRecords.find(x => x.workDate === date);

    if (typeof (record) !== 'undefined') {
      return record;
    } else {
      return undefined;
    }
  }

  isDayOff(date): boolean {
    const dayOffDate = moment(date).format('YYYY-MM-DD').toString();
    const arrayOfDayOff: DayOff[] = this.selectedSchedule.dayOffs;
    const check = arrayOfDayOff.find(x => x.date === dayOffDate);
    if (typeof (check) !== 'undefined') {
      return true;
    } else {
      return false;
    }
  }
}

interface DayOff {
  id: number;
  date: string;
  info: string;
}
