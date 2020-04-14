import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ScheduleSummary } from 'src/app/model/schedule-summary';
import { HttpClient } from '@angular/common/http';
import { ScheduleSummarySerializer } from 'src/app/model/Serializer/schedule-summary-serializer';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Schedule } from 'src/app/model/schedule';
import { ScheduleRecord } from 'src/app/model/schedule-record';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService extends HttpService<ScheduleSummary> {
  readonly url = environment.url;

  constructor(private http: HttpClient) {
    super(
      http,
      'schedule',
      new ScheduleSummarySerializer()
    );
  }

  public getScheduleSummaryByMonth(date): Observable<any> {
    return this.http
      .get<ScheduleSummary>(`${this.url}/schedule/date/${date}`)
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public getScheduleList(): Observable<any> {
    return this.http
      .get<Schedule[]>(`${this.url}/schedule/listSchedule`)
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public getScheduleSummaryByMonthAndStatus(date, status): Observable<any> {
    return this.http
      .get<ScheduleSummary>(`${this.url}/schedule/${date}/${status}`)
      .pipe(
        catchError(super.errorHandl)
      );
  }
}
