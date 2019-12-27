import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Users } from '../../model/users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsersSerializer } from '../../model/Serializer/users-serializer';
import { Observable } from 'rxjs';
import { delay, catchError, retryWhen, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends HttpService<Users> {

  readonly url = environment.url;

  constructor(private http: HttpClient) {
    super(
    http,
    'users',
    new UsersSerializer());
   }

  // Zmiana statusu aktywności użytkownika
  public changeStatus(id: number, status: boolean): Observable<any> {
    return this.http
    .patch(`${this.url}/users/${id}`, JSON.stringify(!status))
    .pipe(
      retryWhen(error => error.pipe(delay(2000), take(2))),
      catchError(super.errorHandl)
    );
  }

  // Aktualizacja danych
  public updateUser(id: number, password?: string, status?: boolean, role?: string): Observable<any> {
    return this.http
    .patch(`${this.url}/users/opt/${id}`, {
      'password': password,
      'status': status,
      'role': role,
    })
    .pipe(
      retryWhen(error => error.pipe(delay(2000), take(2))),
      catchError(super.errorHandl)
    );
  }
}
