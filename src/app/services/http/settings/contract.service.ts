import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  readonly url = environment.url;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http
      .get<any[]>(`${this.url}/setting/contract/`);
  }

  public remove(id): Observable<any> {
    return this.http
      .delete(`${this.url}/setting/contract/${id}`, { responseType: 'text' });
  }

  public update(line): Observable<any> {
    return this.http
      .patch(`${this.url}/setting/contract/`, line, { responseType: 'text' });
  }

  public create(line): Observable<any> {
    return this.http
      .post(`${this.url}/setting/contract/`, line, { responseType: 'text' });
  }
}
