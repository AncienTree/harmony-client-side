import { Injectable } from '@angular/core';
import { Section } from 'src/app/model/section';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';
import { SectionSerializer } from 'src/app/model/Serializer/section-serializer';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SectionService extends HttpService<Section> {
  readonly url = environment.url;

  constructor(private http: HttpClient) {
    super(
      http,
      'setting/usersection',
      new SectionSerializer()
    );
  }

  public getAllExpired(): Observable<any> {
    return this.http
      .get<Section[]>(`${this.url}/setting/usersection/all`)
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public remove(id): Observable<any> {
    return this.http
      .delete(`${this.url}/setting/usersection/${id}`, { responseType: 'text' })
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public update(section): Observable<any> {
    return this.http
      .put(`${this.url}/setting/usersection/`, section, { responseType: 'text' })
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public create(section): Observable<any> {
    return this.http
      .post(`${this.url}/setting/usersection/`, section, { responseType: 'text' })
      .pipe(
        catchError(super.errorHandl)
      );
  }


}
