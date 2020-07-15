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
    console.log(this.form.get('year').value);


  }

  openDialog(day, type) {
    const dialogRef = this.dialog.open(MonthHoursEditComponent, {
      width: '250px',
      data: {
        day,
        type
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      setTimeout(() => {
        this.refresh();
      }, 1500);
    });
  }

}
