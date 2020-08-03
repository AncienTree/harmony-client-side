import { SimpleEmployee } from './../../../model/simple-employee';
import { ScheduleRecordService } from 'src/app/services/http/schedule-record.service';
import { ScheduleRecord } from './../../../model/schedule-record';
import { MatSnackBar, MatSort, MatTableDataSource } from '@angular/material';
import { ScheduleService } from 'src/app/services/http/schedule.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import * as moment from 'moment';
import * as _ from 'lodash';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.scss']
})
export class PresenceComponent implements OnInit {

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  date;
  scheduleList;
  scheduleValue;
  presence: PresenceData[];
  employeeList: EmployeeList;
  hidden = false;
  isLoadingResults = false;
  displayedColumns = ['fullName', 'position', 'userLine', 'userSection', 'dyspo', 'dostp', 'grafik', 'login', 'jitsi', 'obec', 'dzwon'];
  dataSource;

  constructor(
    private scheduleHttp: ScheduleService,
    private recordHttp: ScheduleRecordService,
    private snackBarRef: MatSnackBar,
  ) { }

  ngOnInit() {
    this.scheduleHttp.getFullScheduleList().subscribe(date => {
      this.scheduleList = date;
    });
  }

  // Pobieranie danych
  load() {
    this.isLoadingResults = true;
    const mDate: string = moment(this.date).format('YYYY-MM-DD').toString();
    this.recordHttp.getPresence(mDate).subscribe( response => {
      this.presence = response;
    });

    this.scheduleHttp.getListOfEmployee(this.scheduleValue.scheduleDate).subscribe(response => {
      this.employeeList = response;
      this.dataSource = new MatTableDataSource(response.employees);
      this.dataSource.sort = this.sort;
      this.hidden = true;
      this.isLoadingResults = false;
      console.log(response.employees);

    });
  }

  maxDate() {
    const selectedDate = new Date(this.scheduleValue.scheduleDate);

    return new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
  }
}


export interface PresenceData {
  scheduleType: string;
  recordList: ScheduleRecord[];
}

export interface EmployeeList {
  scheduleDate: string;
  employees: SimpleEmployee[];
}
