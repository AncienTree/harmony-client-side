import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  date = new Date();
  version = '0.0.1 Alpha';
  constructor() { }

  ngOnInit() {
  }

}
