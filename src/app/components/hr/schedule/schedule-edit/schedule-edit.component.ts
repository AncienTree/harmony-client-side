import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ScheduleRecord } from 'src/app/model/schedule-record';
import { Status } from 'src/app/utiles/status';

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.scss']
})
export class ScheduleEditComponent implements OnInit {

  displayedColumns: string[] = ['status', 'start', 'end'];
  scheduleStatus = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private stat: Status,
  ) {
    this.scheduleStatus = this.stat.getStatus();
  }

  ngOnInit() {
    console.log(this.data);

  }

  isAvailable() {
    return typeof (this.data.record) !== 'undefined';
  }

  displayTimeByStatus(key: string, type: string) {
    const searchedRecord = this.data.record.filter(x => x.types === key);
    if (typeof (searchedRecord) !== 'undefined') {
      return 'Works';
    }
    return '---';
  }

}

interface DialogData {
  fullName: string;
  record: ScheduleRecord[];
}
