import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './model/users';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private httpUsers: UsersService) {}

  // test
  users: Observable<Array<Users>>;

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
    this.httpUsers.read(1).subscribe(user =>
      console.log(user));
  }
  getUser2() {
    this.httpUsers.getPost(1).subscribe(user =>
      console.log(user));
  }

  getUser3() {
    this.users = this.httpUsers.obj$;
  }
}
