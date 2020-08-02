import { ScheduleRecordService } from 'src/app/services/http/schedule-record.service';
import { ScheduleRecord } from './../../../model/schedule-record';
import { MatSnackBar } from '@angular/material';
import { ScheduleService } from 'src/app/services/http/schedule.service';
import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.scss']
})
export class PresenceComponent implements OnInit {

  date;
  scheduleList;
  scheduleValue;
  presence: PresenceData[];
  hidden = true;
  isLoadingResults = false;
  displayedColumns = ['fullName', 'position', 'userLine', 'userSection', 'fte'];
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

  load() {
    const mDate: string = moment(this.date).format('YYYY-MM-DD').toString();
    this.recordHttp.getPresence(mDate).subscribe( response => {
      this.presence = response;
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
