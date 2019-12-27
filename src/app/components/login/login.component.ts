import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatSnackBar } from '@angular/material';

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
    private snackBarRef: MatSnackBar
  ) { }

  public authJWT() {
    this.auth.executeJWTAuthService(this.login, this.password)
      .subscribe(
        data => {
          //  console.log(data);
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
          console.error(error);
        }
      );
  }

  private errorStatus(error: string){
    if(error === 'INVALID_CREDENTIALS') {
      return 'Błędna nazwa użytkownika albo hasło.';
    } else if (error === 'USER_NOT_ACTIVATED') {
      return 'Użytkownik jest zablokowany. Zgłoś się się do działu HR lub IT';
    }
  }
}
