import { Schedule } from 'src/app/model/schedule';
import { ScheduleService } from 'src/app/services/http/schedule.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {

  scheduleList;
  scheduleValue;

  constructor(
    private scheduleHttp: ScheduleService,
  ) {
   }

  ngOnInit() {
    this.scheduleHttp.getFullScheduleList().subscribe(date => {
      this.scheduleList = date;
    });
  }

}
