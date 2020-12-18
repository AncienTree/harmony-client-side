import { AvailabilitySerializer } from './../../model/Serializer/availability-serializer';
import { Availability } from './../../model/availability';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ScheduleSummary } from 'src/app/model/schedule-summary';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService extends HttpService<Availability> {
  readonly url = environment.url;

  constructor(private http: HttpClient) {
    super(
      http,
      'availability',
      new AvailabilitySerializer()
    );
  }

  public getAvailabilityByMonth(date): Observable<any> {
    return this.http
      .get<ScheduleSummary>(`${this.url}/availability/${date}`)
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public createAvailability(availability): Observable<any> {
    return this.http
      .post(`${this.url}/availability/create`, availability, { responseType: 'text' })
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public checkAvailability(date): Observable<any> {
    return this.http
      .post<Availability>(`${this.url}/availability/check`, date)
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public closeAvailability(date): Observable<any> {
    return this.http
      .post(`${this.url}/availability/close`, date, { responseType: 'text' })
      .pipe(
        catchError(super.errorHandl)
      );
  }
}
