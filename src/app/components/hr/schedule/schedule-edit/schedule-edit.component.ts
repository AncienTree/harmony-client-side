import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ScheduleRecord } from 'src/app/model/schedule-record';

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.scss']
})
export class ScheduleEditComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  isAvailable() {
    return typeof(this.data.record) !== 'undefined';
  }

}

interface DialogData {
  fullName: string;
  record: ScheduleRecord;
}
