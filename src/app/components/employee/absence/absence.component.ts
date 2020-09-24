import { element } from 'protractor';
import { AbsenceRecord } from './../../../model/absence-record';
import { Component, OnInit } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import * as _ from 'lodash';
import { AbsenceRecordService } from 'src/app/services/http/absence-record.service';

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.scss']
})
export class AbsenceComponent implements OnInit {

  hidden = true;
  options;
  events: any[] = [];
  constructor(
    private absenceHttp: AbsenceRecordService
  ) { }

  ngOnInit() {
  }

  load() {
    this.calOption();
    this.hidden = false;
  }

  private calOption() {
    this.options = {
      plugins: [dayGridPlugin, interactionPlugin],
      locale: 'pl',
      firstDay: 1,
      selectable: true,
      unselectAuto: false,
      height: 800,
      header: {
        left: '',
        center: 'title',
        right: ''
      },
      selectAllow(e) {
        if (e.end.getTime() / 1000 - e.start.getTime() / 1000 <= 86400) {
            return true;
        }
     },
      select: ( selectionInfo ) => {
        if (!this.findDate(selectionInfo.start)) {
          this.events = [...this.events, {
            title: 'Urlop',
            start: selectionInfo.start,
            end: selectionInfo.start
          }];
        } else {
          this.events = _.reject(this.events, ['start', selectionInfo.start]);
        }
      }
    };
  }

  public submit() {
    const request: AbsenceRecord[] = [];
    this.events.forEach(arr => {
      const tempRecord: AbsenceRecord = new AbsenceRecord();
      tempRecord.workDate = arr.start;
      request.push(tempRecord);
    });

    this.absenceHttp.submitAbsence(request).subscribe( response => {
      console.log(response);
    });

  }

  private findDate(date): boolean {
    const check = _.find(this.events, ['start', date]);
    if (check === undefined) {
      return false;
    } else {
      return true;
    }
  }
}
