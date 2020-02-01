import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatSnackBar } from '@angular/material';
import { CookieService } from 'angular2-cookie/services/cookies.service';

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
    this.auth.login(this.login, this.password)
      .subscribe(
        data => {
          this.cookie.put('authenticaterUser', this.login),
          this.cookie.put('token', data.access_token),
          this.cookie.put('refresh_token', data.refresh_token),
          this.cookie.put('expires', data.expires_in.toString()),
          this.cookie.put('jti', data.jti),

          this.route.navigate(['main']);
        },
        error => {
          switch (error.status) {
            case 0:
              this.snackBarRef.open('Wystąpił problem z połączeniem do serwera.', 'close', {
                panelClass: ['red-snackbar']
              });
              break;
            case 401:
              this.snackBarRef.open(this.errorStatus(error.error));
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

  private errorStatus(error: string) {
    if (error === 'INVALID_CREDENTIALS') {
      return 'Błędna nazwa użytkownika albo hasło.';
    } else if (error === 'USER_NOT_ACTIVATED') {
      return 'Użytkownik jest zablokowany. Zgłoś się się do działu HR lub IT';
    }
  }
}
