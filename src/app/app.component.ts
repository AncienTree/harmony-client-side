import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './model/users';
import { UsersService } from './services/http/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private httpUsers: UsersService) {}

  showEmpl = false;
  showManager = false;
  showHR = false;
  showRaports = false;
  showAdmin = false;

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
}
