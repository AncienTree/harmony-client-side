import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LineService {
  readonly url = environment.url;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http
      .get<any[]>(`${this.url}/setting/userline/`);
  }

  public remove(id): Observable<any> {
    return this.http
      .delete(`${this.url}/setting/userline/${id}`, { responseType: 'text' });
  }

  public update(line): Observable<any> {
    return this.http
      .put(`${this.url}/setting/userline/`, line, { responseType: 'text' });
  }

  public create(line): Observable<any> {
    return this.http
      .post(`${this.url}/setting/userline/`, line, { responseType: 'text' });
  }
}
