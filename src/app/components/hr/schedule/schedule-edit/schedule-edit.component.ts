import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Status } from 'src/app/utiles/status';
import { ScheduleRecordService } from 'src/app/services/http/schedule-record.service';
import { ScheduleRecord } from 'src/app/model/schedule-record';

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.scss']
})
export class ScheduleEditComponent {
  scheduleStatus = [];
  recordsData;
  isLoadingResults = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private stat: Status,
    private httpRecords: ScheduleRecordService
  ) {
    this.scheduleStatus = this.stat.getRecordStatus();
    this.httpRecords.getRecors(this.data.simpleEmployee.id, this.data.recordDate).subscribe(p => {
      this.recordsData = p;
      this.isLoadingResults = false;
    });
  }

  isAvailable() {
    return typeof (this.recordsData) !== 'undefined';
  }

  displayTimeByStatus(key: string, type: string) {
    const searchedRecord: ScheduleRecord = this.recordsData.find(x => x.types === key);

    if (typeof (searchedRecord) !== 'undefined') {
      switch (type) {
        case 'start':
          return searchedRecord.startWork;
        case 'end':
          return searchedRecord.endWork;
        default:
          return 'ERROR';
      }
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
