import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MonthHoursSerializer } from 'src/app/model/Serializer/month-hours-serializer copy';
import { MonthHours } from 'src/app/model/month-hours';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MonthHoursService extends HttpService<MonthHours> {

  constructor(private http: HttpClient) {
    super(
      http,
      'setting/monthhours',
      new MonthHoursSerializer()
    );
  }

  public getHoursByYear(year: string): Observable<any> {
    return this.http
      .get(`${this.url}/setting/monthhours/${year}`);
  }

  public updates(hours): Observable<any> {
    return this.http
      .patch(`${this.url}/setting/monthhours/`, hours, { responseType: 'text'})
      .pipe(
        catchError(super.errorHandl)
      );
   }
}
