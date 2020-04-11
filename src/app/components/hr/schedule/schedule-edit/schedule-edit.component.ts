import { ScheduleService } from 'src/app/services/http/schedule.service';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ScheduleRecord } from 'src/app/model/schedule-record';
import { Status } from 'src/app/utiles/status';

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.scss']
})
export class ScheduleEditComponent {

  displayedColumns: string[] = ['status', 'start', 'end'];
  scheduleStatus = [];
  records: ScheduleRecord[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: DialogData,
    private stat: Status,
    private httpSchedule: ScheduleService
  ) {
    this.scheduleStatus = this.stat.getStatus();
    this.httpSchedule.getRecors(this.data.simpleEmployee.id, data.recordDate).subscribe( p =>
      this.records.push(p));
  }

  isAvailable() {
    return typeof (this.data.recordDate) !== 'undefined';
  }

  displayTimeByStatus(key: string, type: string) {
    const searchedRecord = this.records.filter(x => x.types === key);
    if (typeof (searchedRecord) !== 'undefined') {
      return 'Works';
    }
    return '---';
  }

}

interface DialogData {
  simpleEmployee: SimpleEmployee;
  recordDate: string;
}

interface SimpleEmployee {
  id: number;
  fullName: string;
  position: string;
  workStatus: string;
}
