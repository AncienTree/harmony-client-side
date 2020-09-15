import { ScheduleRecord } from './../../../model/schedule-record';
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
  events: any[] = [];
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
    this.hidden = false;
    this.events = [];

    this.isLoadingResults = true;
    this.scheduleHttp.getMyScheduleSummary(date).subscribe(response => {
      this.schedule = response;
      this.parseToEvent(response.scheduleRecords);
      this.calendarOpt();
      this.options.defaultDate = date;
      this.hidden = true;
      this.isLoadingResults = false;
    });

  }

  private parseToEvent(array: any[]) {
    array.forEach(element => {
      this.events.push({
        id: element.id,
        start: element.workDate,
        title: this.titleMaker(element),
        allDay: true,
        backgroundColor: this.colorEvent(element.status),
        borderColor: this.colorEvent(element.status),
      });
    });
  }

  // Kolory według statusów
  private colorEvent(status): string {
    switch (status) {
      case 'CN':
        return '#FA6225';
      case 'CH':
        return '#F79925';
      case 'NN':
        return '#E01414';
      case 'UB':
        return '#539C1F';
      case 'UW':
      case 'UK':
      case 'UZ':
        return '#82F56E';
      case 'OP':
        return '#5BE3AF';
      case 'WP':
        return 'C5C7C3';
      case 'P':
        return '#78A8F5';
      default:
        return '50524E';
    }
  }

  private titleMaker(record: ScheduleRecord): string {
    if (record.status === 'P') {
      return record.types + '\nDzień przepracowany \nOd: ' + record.startWork + ' do: ' + record.endWork;
    } else {
      // TODO
      return record.types + ' ' + record.status;
    }
  }

  // Opcje kalendarza
  private calendarOpt() {
    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      locale: 'pl',
      firstDay: 1,
      header: {
          left: '',
          center: 'title',
          right: ''
      },
      dateClick(event) {
        console.log(event);
      },
      eventClick( log) {
        console.log(log);

      }
    };
  }

}
