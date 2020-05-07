import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ScheduleSummary } from 'src/app/model/schedule-summary';
import { HttpClient } from '@angular/common/http';
import { ScheduleSummarySerializer } from 'src/app/model/Serializer/schedule-summary-serializer';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Schedule } from 'src/app/model/schedule';

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

  // Pełna lista grafików
  public getFullScheduleList(): Observable<any> {
    return this.http
      .get<Schedule[]>(`${this.url}/schedule/all`)
      .pipe(
        catchError(super.errorHandl)
      );
  }

  // Lista tylko widocznych grafików
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

  // Aktualizacja statusow grafiku
  public updateSchedule(id, active, visible): Observable<any> {
    return this.http
    .patch(`${this.url}/schedule/changeStatus`, {
      'id': id,
      'active': active,
      'visible': visible,
    })
    .pipe(
      catchError(super.errorHandl)
    );
  }

  public createSchedule( date ): Observable<any> {
    return this.http
      .post(`${this.url}/schedule/create`, date)
      .pipe(
        catchError(super.errorHandl)
      );
  }
}
