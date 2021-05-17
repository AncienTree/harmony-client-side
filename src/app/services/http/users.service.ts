import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Users } from '../../model/users';
import { HttpClient } from '@angular/common/http';
import { UsersSerializer } from '../../model/Serializer/users-serializer';
import { Observable } from 'rxjs';
import { delay, catchError, retryWhen } from 'rxjs/operators';
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
    .put(`${this.url}/users/${id}/status`, JSON.stringify(!status))
    .pipe(
      retryWhen(error => error.pipe(delay(2000))),
      catchError(super.errorHandl)
    );
  }

  // Aktualizacja danych
  public updateUser(id: number, password?: string, status?: boolean, role?: string): Observable<any> {
    return this.http
    .put(`${this.url}/users/change/`, {
      id,
      password,
      status,
      role,
    })
    .pipe(
      retryWhen(error => error.pipe(delay(2000))),
      catchError(super.errorHandl)
    );
  }
}
