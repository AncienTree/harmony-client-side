import { MatSnackBar } from '@angular/material';
import { ScheduleService } from 'src/app/services/http/schedule.service';
import { Component } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.scss']
})
export class CreateScheduleComponent {
  date;
  constructor(
    private httpSchedule: ScheduleService,
    private snackBarRef: MatSnackBar,
  ) { }

  isDisabled() {
    return (typeof (this.date) === 'undefined');
  }

  closeDatePicker(eventData: any, dp?: any) {
    const stringDate = moment(eventData).format('YYYY-MM-DD').toString();
    this.date = stringDate;

    dp.close();
  }

  submit() {
    this.httpSchedule.createSchedule(this.date).subscribe(
      result => this.snackBarRef.open(result, 'close'),
      err => this.snackBarRef.open(err, 'close', {
        duration: 6000,
        panelClass: ['red-snackbar'] })
    );
  }
}
