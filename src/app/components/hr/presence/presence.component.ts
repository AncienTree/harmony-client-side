import { SimpleEmployee } from './../../../model/simple-employee';
import { ScheduleRecordService } from 'src/app/services/http/schedule-record.service';
import { ScheduleRecord } from './../../../model/schedule-record';
import { MatSnackBar, MatSort, MatTableDataSource, MatSelect } from '@angular/material';
import { ScheduleService } from 'src/app/services/http/schedule.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.scss']
})
export class PresenceComponent implements OnInit {

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatSelect, { static: false }) scheduleSelector: MatSelect;

  date = undefined;
  scheduleList;
  scheduleValue;
  presence: PresenceData[];
  employeeList: EmployeeList;
  hidden = false;
  isLoadingResults = false;
  displayedColumns = ['fullName', 'position', 'userLine', 'userSection', 'obec', 'dostp', 'grafik', 'dyspo', 'login', 'jitsi', 'dzwon'];
  titleDate;
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
    this.scheduleSelector.disabled = true;
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
    });
    this.titleDate = this.date;
  }

  reload() {
    this.hidden = false;
    this.scheduleValue = undefined;
    this.date = undefined;
    this.scheduleSelector.disabled = false;
  }

  maxDate() {
    const selectedDate = new Date(this.scheduleValue.scheduleDate);

    return new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
  }

  findRecord(type, employeeId: number) {
    const data: PresenceData = _.find(this.presence, types => {
      return types.scheduleType === type;
    });

    const record: ScheduleRecord = _.find(data.recordList, rec => {
      return rec.employee === employeeId;
    });

    const date = {
      scheduleRecord: record,
      type,
      id: employeeId,
      date: moment(this.date).format('YYYY-MM-DD').toString()
    };

    return date;
  }

  contractDependent(contract: string, type: string): boolean {
    if (type === 'dostepnosc') {
     if (contract.startsWith('UoP')) {
       return false;
     } else {
       return true;
     }
    } else if (type === 'grafik') {
      if (contract.startsWith('UoP')) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
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

export interface RecordData {
  scheduleRecord: ScheduleRecord;
  id: number;
  type: string;
}
