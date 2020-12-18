import { Router } from '@angular/router';
import { DayoffEditComponent } from './../../../hr/options/dayoff/dayoff-edit/dayoff-edit.component';
import { AvailabilityService } from './../../../../../services/http/availability.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Component } from '@angular/core';

import * as moment from 'moment';


@Component({
  selector: 'app-availability-creation',
  templateUrl: './availability-creation.component.html',
  styleUrls: ['./availability-creation.component.scss']
})
export class AvailabilityCreationComponent {
  date;
  isActive;
  isLoadingResults = false;

  show = false;
  availability;

  constructor(
    private availHttp: AvailabilityService,
    private snackBarRef: MatSnackBar,
    private dialog: MatDialog,
    private router: Router
  ) { }

  isDisabled() {
    return (typeof (this.date) === 'undefined');
  }

  closeDatePicker(eventData: any, dp?: any) {
    const stringDate = moment(eventData).format('YYYY-MM-DD').toString();
    this.date = stringDate;

    dp.close();
  }

  async load() {
    this.isLoadingResults = true;
    this.availHttp.checkAvailability(this.date).subscribe(response => {
      this.availability = response;
      this.isActive = response.active;
      this.isLoadingResults = false;
      this.show = true;
    });
  }

  newDayOff(day, type) {
    const dialogRef = this.dialog.open(DayoffEditComponent, {
      width: '250px',
      data: {
        day,
        type
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      setTimeout(() => {
        this.snackBarRef.open('Dodano dzień wolny od pracy.', 'close', {
          panelClass: ['green-snackbar']
        });
        this.load();
      }, 500);
    });
  }

  submit() {
    this.availHttp.createAvailability(this.date).subscribe(response => {
      this.snackBarRef.open(response, 'close', {
        panelClass: ['green-snackbar']
      });
      this.router.navigateByUrl('/main/hr/dyspozycyjnosc');
    });


  }

}
