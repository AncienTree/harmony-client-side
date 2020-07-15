import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { DayoffService } from 'src/app/services/http/settings/dayoff.service';
import * as moment from 'moment';

@Component({
  templateUrl: './dayoff-edit.component.html',
  styleUrls: ['./dayoff-edit.component.scss']
})
export class DayoffEditComponent {

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) private data: any,
    private fb: FormBuilder,
    private dayoffHttp: DayoffService,
    private snackBarRef: MatSnackBar,
  ) { }
  form = this.fb.group({
    date: [this.data.day.date, Validators.required],
    info: [this.data.day.info, Validators.required]
  });

  submit() {
    const date = moment(this.form.get('date').value).format('YYYY-MM-DD').toString();
    const day = this.data.day;
    day.date = date;
    day.info = this.form.get('info').value;

    if (this.data.type === 'update') {
      this.dayoffHttp.update(day).subscribe(response => {
        this.snackBarRef.open(response, 'close', {
          panelClass: ['green-snackbar']
        });
      });
    } else {
      day.id = 0;
      this.dayoffHttp.create(day).subscribe(
        response => {
          this.snackBarRef.open(response, 'close', {
            panelClass: ['green-snackbar']
          });
        });
    }
  }
}
