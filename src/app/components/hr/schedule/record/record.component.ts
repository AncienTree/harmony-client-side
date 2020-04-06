import { Component, OnInit, Input } from '@angular/core';
import { ScheduleRecord } from 'src/app/model/schedule-record';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

  @Input() record: ScheduleRecord[];
  @Input() status: string;
  chosenRecord: ScheduleRecord;

  constructor() { }

  ngOnInit() {
    this.findByStatus();
  }

  findByStatus() {
    if (this.record !== undefined) {
      this.chosenRecord = this.record.find(sRec => sRec.types === this.status);
    }
  }
}
