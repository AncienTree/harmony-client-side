import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  readonly url = environment.url;

  constructor(private httpClient: HttpClient) { }

  public getMyStats(): Observable<any> {
    return this.httpClient
      .get<any>(`${this.url}/employee/stats/me`);
  }

  public getOthersStats(id): Observable<any> {
    return this.httpClient
      .get<any>(`${this.url}/employee/stats/${id}`);
  }
}
