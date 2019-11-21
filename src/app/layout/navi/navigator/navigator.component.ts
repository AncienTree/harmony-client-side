import { Component, OnInit } from '@angular/core';

import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  icon = faCalendarWeek;
  constructor() { }

  ngOnInit() {
  }

}
