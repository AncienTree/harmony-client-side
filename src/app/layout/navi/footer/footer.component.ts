import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  ver: string = '0.0.1 - Alpha';

  constructor() { }

  ngOnInit() {
  }

}
