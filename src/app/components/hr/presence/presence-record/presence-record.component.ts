import { ScheduleRecord } from './../../../../model/schedule-record';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-presence-record',
  templateUrl: './presence-record.component.html',
  styleUrls: ['./presence-record.component.scss']
})
export class PresenceRecordComponent implements OnInit {
  @Input() record: ScheduleRecord;

  test;
  selectedStatus = 'P';
  start;
  end;

  constructor() { }

  ngOnInit() {
    if (this.record) {
      this.test = this.record.status;
    } else {
      this.test = 'N/D';
    }
  }

}
