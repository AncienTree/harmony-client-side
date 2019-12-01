import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login: string;
  password: string;

  constructor(private route: Router) { }

  public loginToApp() {
    if (this.login === 'test' && this.password === 'abc123') {
      console.log('Udane logowanie');
      this.route.navigate(['main']);
    } else {
      console.log('Nieudane logowanie');
    }
  }
}
