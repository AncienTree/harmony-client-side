import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ScheduleSummary } from 'src/app/model/schedule-summary';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ScheduleSummarySerializer } from 'src/app/model/Serializer/schedule-summary-serializer';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduleSummaryService extends HttpService<ScheduleSummary> {
  readonly url = environment.url;

  constructor(private http: HttpClient) {
    super(
      http,
      'schedule',
      new ScheduleSummarySerializer()
    );
  }

  public getScheduleByMonth(date): Observable<any> {
    console.log(`${this.url}/schedule/date/${date}`);

    return this.http
      .get<ScheduleSummary>(`${this.url}/schedule/date/${date}`)
      .pipe(
        catchError(super.errorHandl)
      );
  }
}
