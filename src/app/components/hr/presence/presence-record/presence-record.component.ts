import { ScheduleRecordService } from 'src/app/services/http/schedule-record.service';
import { ScheduleRecord } from './../../../../model/schedule-record';
import { Component, OnInit, Input } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-presence-record',
  templateUrl: './presence-record.component.html',
  styleUrls: ['./presence-record.component.scss']
})
export class PresenceRecordComponent implements OnInit {
  @Input() record: RecordData;

  timeDisabled = false;
  startTime = false;
  endTime = false;
  selectedStatus = 'P';
  start;
  end;

  constructor(
    private recordHttp: ScheduleRecordService
    ) { }

  ngOnInit() {
    if (this.record.scheduleRecord) {
      this.start = this.transformTime(this.record.scheduleRecord.startWork, 'js');
      this.end = this.transformTime(this.record.scheduleRecord.endWork, 'js');
      this.selectedStatus = this.record.scheduleRecord.status;
    }
  }

  // Zmiana czasu na format JS lub do bazy danych
  transformTime(time, type) {
    if (type === 'db') {
      return moment(time).format('HH:mm:ss');
    } else if (type === 'js') {
      const convTime: Date = new Date();
      convTime.setHours(time.substring(0, 2));
      convTime.setMinutes(time.substring(5, 5));
      convTime.setSeconds(time.substring(6, 8));
      return convTime;
    } else {
      return undefined;
    }
  }

  // Blokowanie formatki czasu po wybraniu statusu inny niż praca
  checkStatus() {
    if (this.selectedStatus !== 'P') {
      this.timeDisabled = true;
      this.notWorkingStatusSelected();
    } else {
      this.timeDisabled = false;
      this.startTime = false;
      this.endTime = false;
    }
  }

  startBlur() {
    this.startTime = true;
    this.autoSumbit();
  }

  endBlur() {
    this.endTime = true;
    this.autoSumbit();
  }

  notWorkingStatusSelected() {
    this.startTime = true;
    this.endTime = true;

    // reset czasu
    this.start = this.transformTime('00-00-00', 'js');
    this.end = this.transformTime('00-00-00', 'js');
    this.autoSumbit();
  }

  // automatyczne zapisywanie do bazy rekordu po wprowadzeniu obu godzin
  // TODO Zrobić mechanizm dla updateu godzin
  autoSumbit() {
    if (this.startTime && this.endTime) {
      let updatedRecord = this.record.scheduleRecord;
      if (!updatedRecord) {
        updatedRecord = new ScheduleRecord();
        updatedRecord.employee = this.record.id;
        updatedRecord.types = this.record.type;
        updatedRecord.workDate = this.record.date;
        updatedRecord.id = 0;
      }

      if (this.startTime && this.endTime) {
        updatedRecord.status = this.selectedStatus;
        updatedRecord.endWork = this.transformTime(this.end, 'db').toString();
        updatedRecord.startWork = this.transformTime(this.start, 'db').toString();
      }

      // zapis do bazy
      if (updatedRecord.id !== 0) {
        this.recordHttp.update(updatedRecord).subscribe();
      } else {
        this.recordHttp.create(updatedRecord).subscribe();
      }

    }
  }
}

export interface RecordData {
  scheduleRecord: ScheduleRecord;
  id: number;
  type: string;
  date: string;
}
