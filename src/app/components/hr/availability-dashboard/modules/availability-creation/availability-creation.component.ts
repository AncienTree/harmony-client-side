import { AvailabilityService } from './../../../../../services/http/availability.service';
import { MatSnackBar } from '@angular/material';
import { Component } from '@angular/core';

import * as moment from 'moment';
import { first, tap } from 'rxjs/operators';


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

  changeDate() {
    this.show = false;
  }

}
