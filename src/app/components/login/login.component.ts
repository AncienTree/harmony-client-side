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

  public basicAuthLoginToApp() {
    this.auth.executeBasicAuthService(this.login, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.route.navigate(['main']);
        },
        error => {
          console.log(error);
        }
      );
  }
}
