import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EmployeeInfoSerializer } from './../../../model/Serializer/employee-info-serializer';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './../http.service';
import { EmployeeInfo } from './../../../model/employee-info';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeInfoService extends HttpService<EmployeeInfo>{

  constructor(private http: HttpClient) {
    super(
      http,
      'employee/info',
      new EmployeeInfoSerializer());
  }

  public update(data): Observable<any> {
    return this.http
      .patch(`${this.url}/employee/info/`, data, { responseType: 'text' })
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public getInfo(id): Observable<any> {
    return this.http
      .get<EmployeeInfo>(`${this.url}/employee/info/${id}`)
      .pipe(
        catchError(super.errorHandl)
      );
  }
}
