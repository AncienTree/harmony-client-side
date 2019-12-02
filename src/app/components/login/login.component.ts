import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login: string;
  password: string;

  constructor(
    private route: Router,
    private auth: AuthenticationService
    ) { }

  public loginToApp() {
    if (this.auth.authenticate(this.login, this.password)) {
      console.log('Udane logowanie');
      this.route.navigate(['main']);
    } else {
      console.log('Nieudane logowanie');
    }
  }
}
