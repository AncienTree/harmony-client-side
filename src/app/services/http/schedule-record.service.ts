import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ScheduleRecord } from 'src/app/model/schedule-record';
import { HttpClient } from '@angular/common/http';
import { ScheduleRecordSerializer } from 'src/app/model/Serializer/schedule-record-serializer';

@Injectable({
  providedIn: 'root'
})
export class ScheduleRecordService extends HttpService<ScheduleRecord> {

  constructor(private http: HttpClient) {
    super(
      http,
      'schedule',
      new ScheduleRecordSerializer()
    );
   }
}
