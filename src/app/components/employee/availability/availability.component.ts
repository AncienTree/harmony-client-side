import { MatSnackBar } from '@angular/material';
import { AvailabilityService } from './../../../services/http/availability.service';
import { Component, OnInit } from '@angular/core';
import { Availability } from 'src/app/model/availability';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

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

  options;
  events: any[] = [];

  constructor(
    private availabilityHttp: AvailabilityService,
    private snackBarRef: MatSnackBar,
  ) { }

  ngOnInit() {
    this.calOption();
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

  private calOption() {
    this.options = {
      plugins: [dayGridPlugin, interactionPlugin],
      locale: 'pl',
      firstDay: 1,
      selectable: true,
      unselectAuto: false,
      displayEventTime: false,
      height: 800,
      header: {
        left: '',
        center: 'title',
        right: ''
      }
    };
  }

}
