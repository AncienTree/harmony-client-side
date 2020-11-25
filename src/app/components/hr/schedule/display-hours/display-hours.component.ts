import { ScheduleSummary } from './../../../../model/schedule-summary';
import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'app-display-hours',
  templateUrl: './display-hours.component.html',
  styleUrls: ['./display-hours.component.scss']
})
export class DisplayHoursComponent implements OnInit {
  @Input() employee: ScheduleSummary;
  @Input() rbh;

  constructor() {
  }

  ngOnInit() {
  }

  przepracowane() {
    let count = 0;
    _.forEach(this.employee.scheduleRecords, x => {
      const start = moment(x.startWork, 'h:mm:ss');
      const end = moment(x.endWork, 'h:mm:ss');

      const duration = moment.duration(end.diff(start));
      count += duration.asHours();
    });

    return count;
  }

  pozostalo() {
    const workHours = this.przepracowane();
    const rbhMonth = this.rbh * this.employee.simpleEmployee.etat;
    if (this.employee.simpleEmployee.etat === -1) {
      return 'Err - Etat';
    }

    return rbhMonth - workHours;
  }

  urlopy() {
    let count = 0;
    _.forEach(this.employee.scheduleRecords, x => {
      if (x.status === 'UW' || x.status === 'OP' || x.status === 'UZ') {
        count++;
      }
    });
    return count;
  }

  choroby() {
    let count = 0;
    _.forEach(this.employee.scheduleRecords, x => {
      if (x.status === 'CH' || x.status === 'CN') {
        count++;
      }
    });
    return count;
  }

  inne() {
    let count = 0;
    _.forEach(this.employee.scheduleRecords, x => {
      if (x.status === 'UB' || x.status === 'UK' || x.status === 'OP') {
        count++;
      }
    });
    return count;
  }


  nieobecnosc() {
    let count = 0;
    _.forEach(this.employee.scheduleRecords, x => {
      if (x.status === 'NN') {
        count++;
      }
    });
    return count;
  }

  getColorNN() {
    if (this.nieobecnosc() > 0) {
      return 'red';
    }
    return 'black';
  }

  statusColor(number) {
    if (number > 0) {
      return '#dbaf37';
    } else if (number < 0) {
      return 'red';
    } else if (number === 0) {
      return '#b7ff5e';
    } else {
      return 'black';
    }
  }
}

