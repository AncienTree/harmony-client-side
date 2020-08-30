import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { ScheduleRecordSerializer } from 'src/app/model/Serializer/schedule-record-serializer';
import { Observable } from 'rxjs';
import { ScheduleRecord } from 'src/app/model/schedule-record';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduleRecordService extends HttpService<ScheduleRecord> {

  constructor(private http: HttpClient) {
    super(
      http,
      'schedule/record',
      new ScheduleRecordSerializer()
    );
   }

   public getRecors(id, date): Observable<ScheduleRecord[]> {
    return this.http
      .get<ScheduleRecord[]>(`${this.url}/schedule/record/${id}/${date}`)
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public getPresence(date): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.url}/schedule/record/${date}`)
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public updateRecord(date: ScheduleRecord): Observable<any> {
    return this.http
      .patch(`${this.url}/schedule/record/`, date, { responseType: 'text'})
      .pipe(
        catchError(super.errorHandl)
      );
  }
}
