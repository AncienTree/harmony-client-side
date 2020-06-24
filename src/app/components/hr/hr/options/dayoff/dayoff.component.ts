import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dayoff',
  templateUrl: './dayoff.component.html',
  styleUrls: ['./dayoff.component.scss']
})
export class DayoffComponent implements OnInit {

  case;

  constructor() { }

  ngOnInit() {
  }

  switchCase(arg) {
    this.case = arg;
  }
}
