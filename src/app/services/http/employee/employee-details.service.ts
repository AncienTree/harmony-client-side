import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmployeeDetailsSerializer } from './../../../model/Serializer/employee-details-serializer';
import { HttpService } from './../http.service';
import { EmployeeDetails } from './../../../model/employee-details';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService extends HttpService<EmployeeDetails> {

  constructor(private http: HttpClient) {
    super(
      http,
      'employee/details',
      new EmployeeDetailsSerializer());
  }

  public update(data): Observable<any> {
    return this.http
      .put(`${this.url}/employee/details/`, data, { responseType: 'text' })
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public getDetails(id): Observable<any> {
    return this.http
      .get<EmployeeDetails>(`${this.url}/employee/details/${id}`)
      .pipe(
        catchError(super.errorHandl)
      );
  }
}
