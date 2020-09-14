import { ScheduleSummary } from 'src/app/model/schedule-summary';
import { ScheduleService } from 'src/app/services/http/schedule.service';
import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-work-time',
  templateUrl: './work-time.component.html',
  styleUrls: ['./work-time.component.scss']
})
export class WorkTimeComponent implements OnInit {

  hidden = false;
  isLoadingResults = false;
  scheduleList;
  events: any[];
  options;
  schedule: ScheduleSummary;

  constructor(
    private scheduleHttp: ScheduleService,
  ) { }

  ngOnInit() {
    this.scheduleHttp.getMyScheduleList().subscribe(date => {
      this.scheduleList = date;
    });
  }

  public load(date) {
    this.isLoadingResults = true;
    this.scheduleHttp.getMyScheduleSummary(date).subscribe(response => {
      this.schedule = response;
      this.events = response.scheduleRecords;
      this.calendarOpt(date);
      this.hidden = true;
      this.isLoadingResults = false;
    });

  }

  private calendarOpt(date) {
    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: date,
      header: {
          left: 'prev,next',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
      }
    };
  }

}
