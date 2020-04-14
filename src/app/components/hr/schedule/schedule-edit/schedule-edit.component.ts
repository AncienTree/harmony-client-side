import { Component, Inject, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Status } from 'src/app/utiles/status';
import { ScheduleRecordService } from 'src/app/services/http/schedule-record.service';
import { ScheduleRecord } from 'src/app/model/schedule-record';

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.scss']
})
export class ScheduleEditComponent implements AfterViewInit {
  scheduleStatus = [];
  recordsData;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: DialogData,
    private stat: Status,
    private httpRecords: ScheduleRecordService
  ) {
    this.scheduleStatus = this.stat.getRecordStatus();
    this.httpRecords.getRecors(this.data.simpleEmployee.id, this.data.recordDate).subscribe(p => {
      this.recordsData = p;
    });
  }

  ngAfterViewInit() {

  }


  isAvailable() {
    return typeof (this.recordsData) !== 'undefined';
  }

  displayTimeByStatus(key: string, type: string) {
    const searchedRecord: ScheduleRecord = this.recordsData.find(x => x.types === key);
    console.log(searchedRecord);    

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
