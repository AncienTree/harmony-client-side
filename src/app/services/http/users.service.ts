import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Users } from '../../model/users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsersSerializer } from '../../model/Serializer/users-serializer';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends HttpService<Users> {

  readonly url = environment.url;
  readonly options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  };

  constructor(private http: HttpClient) {
    super(
    http,
    'users',
    new UsersSerializer());
   }

  //  public updateStatus(id: number, status: boolean): Observable<any> {
  //   return this.httpClient
  //     .patch(`${this.url}/${this.endpoint}/${id}`, JSON.stringify(!status), this.options)
  //     .pipe(
  //       retry(1),
  //       catchError(this.errorHandl)
  //     );
  // }

  public changeStatus(id: number, status: boolean): Observable<any> {
    return this.http
    .patch(`${this.url}/users/${id}`, JSON.stringify(!status), this.options)
    .pipe(
      retry(1),
      catchError(super.errorHandl)
    );
  }
}
