import { Component, OnInit, Input } from '@angular/core';
import { ScheduleRecord } from 'src/app/model/schedule-record';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

  @Input() record: ScheduleRecord;
  constructor() { }

  ngOnInit() {
  }

}
