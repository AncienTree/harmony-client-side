import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DayoffService {
  readonly url = environment.url;

  constructor(private http: HttpClient) { }

  public getDays(start, end): Observable<any> {
    return this.http
      .get(`${this.url}/setting/dayoff/between/`, {
        params:{
          start,
          end
        }
      });
  }

  public getDaysByYear(year): Observable<any> {
    return this.http
      .get(`${this.url}/setting/dayoff/${year}`);
  }

  public create(dayoff): Observable<any> {
    return this.http
      .post(`${this.url}/setting/dayoff/`, dayoff, { responseType: 'text' });
  }

  public remove(id): Observable<any> {
    return this.http
      .delete(`${this.url}/setting/dayoff/${id}`, { responseType: 'text' });
  }

  public update(dayoff): Observable<any> {
    return this.http
      .put(`${this.url}/setting/dayoff/`, dayoff, { responseType: 'text' });
  }
}
