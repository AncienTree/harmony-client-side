import { Component, OnInit } from '@angular/core';
import { MonthHours } from 'src/app/model/month-hours';
import { MonthHoursService } from 'src/app/services/http/settings/month-hours.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MonthHoursEditComponent } from './month-hours-edit/month-hours-edit.component';

@Component({
  selector: 'app-month-hours',
  templateUrl: './month-hours.component.html',
  styleUrls: ['./month-hours.component.scss']
})
export class MonthHoursComponent implements OnInit {

  isLoadingResults = true;
  hours: MonthHours;
  data: MonthHours[] = [];
  constructor(
    private hoursHttp: MonthHoursService,
    private fb: FormBuilder,
    private dialog: MatDialog,
  ) { }

  form = this.fb.group({
    year: ['', Validators.required],
  });

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.hoursHttp.showAll().subscribe(result => {
      this.data = result;
      this.isLoadingResults = false;
      this.hours = undefined;
    });
  }

  load() {
    const specificYear = this.data.find(x => x.year === this.form.get('year').value);
    this.hours = specificYear;
  }

  openDialog(hours, type) {
    const dialogRef = this.dialog.open(MonthHoursEditComponent, {
      width: '400px',
      data: {
        hours,
        type
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      setTimeout(() => {
        this.refresh();
      }, 1500);
    });
  }

  countRbh() {
    return this.hours.january + this.hours.february + this.hours.march + this.hours.april + this.hours.may + this.hours.june +
    this.hours.july + this.hours.august  + this.hours.september  + this.hours.october + this.hours.november + this.hours.december;
  }

}
