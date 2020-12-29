import { DayoffService } from 'src/app/services/http/settings/dayoff.service';
import { MonthHoursService } from 'src/app/services/http/settings/month-hours.service';
import { MatSnackBar } from '@angular/material';
import { AvailabilityService } from './../../../services/http/availability.service';
import { Component, OnInit } from '@angular/core';
import { Availability } from 'src/app/model/availability';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit {

  availabilityValue
  availabilityList
  selectedAvailability: Availability;


  buttonDisabled = true;
  calendar = false;

  constructor(
    private availabilityHttp: AvailabilityService,
    private monthHoursHttp: MonthHoursService,
    private dayOffHttp: DayoffService,
    private snackBarRef: MatSnackBar,

  ) { }

  ngOnInit() {
    this.availabilityHttp.showAll().subscribe(response => {
      this.availabilityList = response;
    })
  }

  changeSchedule(event) {
    this.availabilityValue = event;
    this.buttonDisabled = false;
  }

  load() {
    this.calendar = true;
  }

}
