import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Users } from '../model/users';
import { HttpClient } from '@angular/common/http';
import { UsersSerializer } from '../model/Serializer/users-serializer';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends HttpService<Users> {

  constructor(http: HttpClient) {
    super(
    http,
    'users',
    new UsersSerializer());
   }
}
