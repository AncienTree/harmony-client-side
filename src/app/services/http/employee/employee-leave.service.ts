import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EmployeeLeaveSerializer } from './../../../model/Serializer/employee-leave-serializer';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './../http.service';
import { EmployeeLeave } from './../../../model/employee-leave';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeLeaveService extends HttpService<EmployeeLeave>{

  constructor(private http: HttpClient) {
    super(
      http,
      'employee/leave',
      new EmployeeLeaveSerializer());
  }

  public update(data): Observable<any> {
    return this.http
      .put(`${this.url}/employee/leave/`, data, { responseType: 'text' })
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public getLeave(id): Observable<any> {
    return this.http
      .get<EmployeeLeave>(`${this.url}/employee/leave/${id}`)
      .pipe(
        catchError(super.errorHandl)
      );
  }
}
