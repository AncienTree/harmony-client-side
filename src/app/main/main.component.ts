import { Component } from '@angular/core';
import { UsersService } from '../services/http/users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private httpUsers: UsersService) {}

  showEmpl = false;
  showManager = false;
  showHR = false;
  showRaports = false;
  showAdmin = false;

  date = new Date();
  version = '0.0.1 Alpha';

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
