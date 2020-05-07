import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatSnackBar } from '@angular/material';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { delay, delayWhen } from 'rxjs/operators';

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
    private auth: AuthenticationService,
    private snackBarRef: MatSnackBar,
    private cookie: CookieService
  ) { }

  public authJWT() {
    this.cookie.removeAll();

    this.auth.login(this.login, this.password)
      .subscribe(
        data => {
          this.cookie.put('authenticaterUser', this.login),
          this.cookie.put('token', data.access_token),
          this.cookie.put('jti', data.jti),
          this.cookie.put('name', data.name),
          this.cookie.put('org', data.organization),

          this.route.navigate(['main']);
        },
        error => {
          console.log(error);

          switch (error.status) {
            case 0:
              this.snackBarRef.open('Wystąpił problem z połączeniem do serwera.', 'close', {
                panelClass: ['red-snackbar']
              });
              break;
            case 401:
              this.snackBarRef.open('Błędna nazwa użytkownika lub hasło.');
              break;
            case 500:
              this.snackBarRef.open('Wystąpił problem serwerze apkiacji.', 'close', {
                panelClass: ['red-snackbar']
              });
              break;
          }
        }
      );
  }
}
