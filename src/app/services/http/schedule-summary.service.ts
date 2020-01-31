import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ScheduleSummary } from 'src/app/model/schedule-summary';
import { HttpClient } from '@angular/common/http';
import { ScheduleSummarySerializer } from 'src/app/model/Serializer/schedule-summary-serializer';

@Injectable({
  providedIn: 'root'
})
export class ScheduleSummaryService extends HttpService<ScheduleSummary> {

  constructor(private http: HttpClient) {
    super(
      http,
      'schedule',
      new ScheduleSummarySerializer()
    );
  }

}
