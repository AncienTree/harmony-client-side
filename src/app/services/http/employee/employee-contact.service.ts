import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { EmployeeContact } from 'src/app/model/employee-contact';
import { HttpService } from '../http.service';
import { environment } from 'src/environments/environment';
import { EmployeeContactSerializer } from 'src/app/model/Serializer/employee-contact-serializer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeContactService extends HttpService<EmployeeContact> {

  readonly url = environment.url;

  constructor(private http: HttpClient) {
    super(
      http,
      'employee/contact',
      new EmployeeContactSerializer());
  }

  public update(data): Observable<any> {
    return this.http
      .put(`${this.url}/employee/contact/`, data, { responseType: 'text' })
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public getContact(id): Observable<any> {
    return this.http
      .get<EmployeeContact>(`${this.url}/employee/contact/${id}`)
      .pipe(
        catchError(super.errorHandl)
      );
  }
}
