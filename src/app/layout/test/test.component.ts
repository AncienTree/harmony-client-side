import { Component, OnInit } from '@angular/core';
import { TesthttpService } from '../../services/testhttp.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  login: string;
  pass: string;
  name: string;
  surname: string;
  pesel: string;

  constructor(private httpService: TesthttpService) { }

  ngOnInit() {
  }

  wyslij() {
    const p: Post = ({
      login: this.login,
      password: this.pass,
      name: this.name,
      lastName: this.surname,
      pesel: this.pesel,
    });
    this.httpService.addPost(p).subscribe(adduser => {
      console.log(adduser);
    });
  }

}

export interface Post {
  login?: string;
  password?: string;
  name?: string;
  lastName?: string;
  pesel?: string;
}
