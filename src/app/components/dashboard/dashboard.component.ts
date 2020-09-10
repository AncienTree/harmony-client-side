import { StatsService } from './../../services/http/stats.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  date;
  interval;
  stats: Stats;

  constructor(
    private statsHttp: StatsService
  ) { }

  ngOnInit() {
    this.timer();
    this.interval = setInterval(() => {
      this.timer();
    }, 1000);

    this.statsHttp.getMyStats().subscribe(result => {
      this.stats = result;
    });
  }

  timer() {
    this.date = moment().format('YYYY-MM-DD HH:mm:ss');
 }
}

export class Stats {
    currentMonthWorkedHours: number;
    currentMonthHours: number;
    leaves: number;
    currentMonthLeaves: number;
    absences: number;
    currentMonthAbsences: number;
}
