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

  constructor() { }

  ngOnInit() {
    this.timer();
    this.interval = setInterval(() => {
      this.timer();
    }, 1000);
  }

  timer() {
    this.date = moment().format('YYYY-MM-DD HH:mm:ss');
 }
}
