import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MonthHoursSerializer } from 'src/app/model/Serializer/month-hours-serializer copy';
import { MonthHours } from 'src/app/model/month-hours';
import { HttpService } from '../http.service';

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
}
