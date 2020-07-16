import { Component, Optional, Inject } from '@angular/core';
import { MonthHoursService } from 'src/app/services/http/settings/month-hours.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { MonthHours } from 'src/app/model/month-hours';

@Component({
  templateUrl: './month-hours-edit.component.html',
  styleUrls: ['./month-hours-edit.component.scss']
})
export class MonthHoursEditComponent {
  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) private data: any,
    private fb: FormBuilder,
    private hoursHttp: MonthHoursService,
    private snackBarRef: MatSnackBar,
  ) { }

  form = this.fb.group({
    year: [this.data.hours.year, [Validators.required, Validators.maxLength(4), Validators.pattern('^[0-9]*$')]],
    january: [this.data.hours.january, [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]*$')]],
    february: [this.data.hours.february, [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]*$')]],
    march: [this.data.hours.march, [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]*$')]],
    april: [this.data.hours.april, [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]*$')]],
    may: [this.data.hours.may, [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]*$')]],
    june: [this.data.hours.june, [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]*$')]],
    july: [this.data.hours.july, [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]*$')]],
    august: [this.data.hours.august, [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]*$')]],
    september: [this.data.hours.september, [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]*$')]],
    october: [this.data.hours.october, [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]*$')]],
    november: [this.data.hours.november, [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]*$')]],
    december: [this.data.hours.december, [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]*$')]]
    });

  submit() {
    const hours: MonthHours = this.data.hours;
    hours.year = this.form.get('year').value;
    hours.january = this.form.get('january').value;
    hours.february = this.form.get('february').value;
    hours.march = this.form.get('march').value;
    hours.april = this.form.get('april').value;
    hours.may = this.form.get('may').value;
    hours.june = this.form.get('june').value;
    hours.july = this.form.get('july').value;
    hours.august = this.form.get('august').value;
    hours.september = this.form.get('september').value;
    hours.october = this.form.get('october').value;
    hours.november = this.form.get('november').value;
    hours.december = this.form.get('december').value;

    if (this.data.type === 'update') {
      this.hoursHttp.updates(hours).subscribe(response => {
        this.snackBarRef.open(response, 'close', {
          panelClass: ['green-snackbar']
        });
      });
    } else {
      hours.id = 0;
      this.hoursHttp.create(hours).subscribe(
        response => {
          this.snackBarRef.open('Utworzono roboczogodziny na rok ' + hours.year, 'close', {
            panelClass: ['green-snackbar']
          });
        });
    }
  }
}
