import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ScheduleRecord } from 'src/app/model/schedule-record';

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.scss']
})
export class ScheduleEditComponent implements OnInit {

  displayedColumns: string[] = ['status', 'start', 'end'];
  scheduleStatus: Status[] = [
    { name: 'wg. obecności', key: 'OBEC' },
    { name: 'wg. dyspozycyjności', key: 'DYSPO' },
    { name: 'wg. dostępności', key: 'DOSTP' },
    { name: 'wg. grafiku', key: 'GRAFIK' },
    { name: 'wg. zalogowania', key: 'LOGIN' },
    { name: 'wg. jitsi', key: 'JITSI' },
    { name: 'wg. dzwonienia', key: 'DZWON' }
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  ngOnInit() {
  }

  isAvailable() {
    return typeof (this.data.record) !== 'undefined';
  }

  displayTimeByStatus(key: string, type: string) {
    const searchedRecord = this.data.record.filter(x => x.types === key);
    if (typeof(searchedRecord) !== 'undefined') {
      return 'Works';
    }
    return '---';
  }

}

interface DialogData {
  fullName: string;
  record: ScheduleRecord[];
}

interface Status {
  name: string;
  key: string;
}
