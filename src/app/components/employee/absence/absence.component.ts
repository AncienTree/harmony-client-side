import { AbsenceRecord } from './../../../model/absence-record';
import { Component, OnInit } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AbsenceRecordService } from 'src/app/services/http/absence-record.service';

import * as _ from 'lodash';
import * as moment from 'moment';
import { MatSnackBar, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.scss']
})
export class AbsenceComponent implements OnInit {

  switchMenu = 'none';
  options;
  events: any[] = [];
  displayedColumns: string[] = ['no', 'date'];
  requestSource; // Wnioski
  absenceSource;  // Nieobecności
  isLoadingResults = false;
  displayTable = false;

  constructor(
    private absenceHttp: AbsenceRecordService,
    private snackBarRef: MatSnackBar
  ) { }

  ngOnInit() {
    this.calOption();
  }

  menu(option) {
    this.displayTable = false;
    this.switchMenu = option;
  }

  loadMyRequests() {
    this.isLoadingResults = true;
    this.absenceHttp.getMy().subscribe(respone => {
      this.requestSource = new MatTableDataSource(respone);
      this.displayTable = true;
      this.isLoadingResults = false;
    });
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
        const date = new Date();
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

        if (e.end.getTime() / 1000 - e.start.getTime() / 1000 <= 86400) {
            if (e.start >= firstDay && e.start <= lastDay) {
              return true;
            }
            return false;
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
      tempRecord.workDate = moment(arr.start).format('YYYY-MM-DD').toString();
      request.push(tempRecord);
    });

    this.absenceHttp.submitAbsence(request).subscribe( response => {
      this.snackBarRef.open(response, 'close', {
        panelClass: ['green-snackbar']
      });
      this.events = [];
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
