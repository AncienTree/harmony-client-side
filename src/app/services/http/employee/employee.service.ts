import { SimpleEmployee } from './../../../model/simple-employee';
import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Employee } from 'src/app/model/employee';
import { HttpClient } from '@angular/common/http';
import { EmployeeSerializer } from 'src/app/model/Serializer/employee-serializer';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends HttpService<Employee> {

  readonly url = environment.url;

  constructor(private http: HttpClient) {
    super(
      http,
      'employee',
      new EmployeeSerializer());
  }

  public update(employee): Observable<any> {
    return this.http
      .put(`${this.url}/employee/`, employee, { responseType: 'text' })
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public checkInDB(pesel): Observable<any> {
    return this.http
      .get<boolean>(`${this.url}/employee/hr/${pesel}/isAvailable`)
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public counter(): Observable<any> {
    return this.http.get<any>(`${this.url}/employee/counter`)
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public getEmployee(id): Observable<any> {
    return this.http
      .get<Employee>(`${this.url}/employee/${id}`)
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public getPersnoalDate(): Observable<any> {
    return this.http
      .get(`${this.url}/employee/personal`)
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public getSimpleEmployeesByPosition(position): Observable<any> {
    return this.http.get<any>(`${this.url}/employee/position/${position}`)
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public fireEmployee(id): Observable<any> {
    return this.http.post(`${this.url}/employee/fire`, id, { responseType: 'text' })
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public getSimpleEmployeesByPesel(pesel): Observable<any> {
    return this.http.get<SimpleEmployee>(`${this.url}/employee/hr/${pesel}`)
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public restoreEmployee(id): Observable<any> {
    return this.http.post(`${this.url}/employee/restore`, id, { responseType: 'text' })
      .pipe(
        catchError(super.errorHandl)
      );
  }
}
