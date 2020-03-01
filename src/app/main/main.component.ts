import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/http/users.service';
import { AuthenticationService } from '../services/authentication.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  showEmpl = false;
  showManager = false;
  showHR = false;
  showRaports = false;
  showAdmin = false;
  user;

  date = new Date();
  version = '0.0.1 Alpha';

  constructor(private httpUsers: UsersService,
              private auth: AuthenticationService,
              private cookie: CookieService
              ) {}

  ngOnInit() {
    this.user = this.cookie.get('name');
  }

  toggleEmpl() {
    this.showEmpl = !this.showEmpl;
  }

  toggleManager() {
    this.showManager = !this.showManager;
  }

  toggleHR() {
    this.showHR = !this.showHR;
  }

  toggleRaports() {
    this.showRaports = !this.showRaports;
  }

  toggleAdmin() {
    this.showAdmin = !this.showAdmin;
  }

  getUser() {
    this.httpUsers.read(1).subscribe(
      (user) => { console.log(user); },
      (error) => { console.log('Wystąpił błąd ', error); }
      );
  }

  getUsers() {
    this.httpUsers.showAll().subscribe(
      (user) => { console.log(user); },
      (error) => { console.log('Wystąpił błąd ', error); }
      );
  }

  logout() {
    this.auth.logout();
  }
}
