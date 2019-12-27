import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Employee } from 'src/app/model/employee';
import { HttpClient } from '@angular/common/http';
import { EmployeeSerializer } from 'src/app/model/Serializer/employee-serializer';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';

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

   public checkInDB(pesel): Observable<any> {
     return this.http
      .get<boolean>(`${this.url}/employee/hr/${pesel}`)
      .pipe(
        catchError(super.errorHandl)
      );
   }
}
