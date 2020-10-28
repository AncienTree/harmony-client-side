import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatSnackBar } from '@angular/material';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

  @ViewChild('loginForm', {static: false}) loginFormRef: ElementRef;
  login: string;
  password: string;

  constructor(
    private route: Router,
    private auth: AuthenticationService,
    private snackBarRef: MatSnackBar,
    private cookie: CookieService
  ) { }

  ngAfterViewInit() {
    // Automatyczny focus na polu login
    this.loginFormRef.nativeElement.focus();
  }

  public authJWT() {
    this.cookie.removeAll();

    this.auth.login(this.login.toLocaleLowerCase(), this.password)
      .subscribe(
        data => {
          this.cookie.put('authenticaterUser', this.login),
          this.cookie.put('token', data.token),

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
              this.snackBarRef.open('Wystąpił problem na serwerze.', 'close', {
                panelClass: ['red-snackbar']
              });
              break;
          }
        }
      );
  }
}
