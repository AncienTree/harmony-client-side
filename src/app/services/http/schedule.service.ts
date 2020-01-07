import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Schedule } from 'src/app/model/schedule';
import { HttpClient } from '@angular/common/http';
import { ScheduleSerializer } from 'src/app/model/Serializer/schedule-serializer';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService extends HttpService<Schedule> {

  constructor(private http: HttpClient) {
    super(
      http,
      'schedule',
      new ScheduleSerializer()
    );
   }
}
