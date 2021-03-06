import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resource } from '../../model/resource';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { Serializer } from 'src/app/model/Serializer/serializer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService<T extends Resource> {
  readonly url = environment.url;

  constructor(
    private httpClient: HttpClient,
    private endpoint: string,
    private serializer: Serializer) {
  }

  // POST methode
  public create(item: T): Observable<T> {
    return this.httpClient.post(`${this.url}/${this.endpoint}/`,
      this.serializer.toJson(item), { responseType: 'text'})
      .pipe(
        map(data => this.serializer.fromJson(data) as T),
        catchError(this.errorHandl)
      );
  }

  // GET methode
  public read(id: number): Observable<T> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}/${id}`)
      .pipe(
        map((data: any) => this.serializer.fromJson(data) as T),
        catchError(this.errorHandl)
      );
  }

  // GET all methode
  public showAll(): Observable<T[]> {
    return this.httpClient
      .get<T[]>(`${this.url}/${this.endpoint}/`)
      .pipe(
        catchError(this.errorHandl)
      );
  }

  // PUT methode
  public update(item: T): Observable<T> {
    return this.httpClient.put(`${this.url}/${this.endpoint}/${item.id}`,
      this.serializer.toJson(item), { responseType: 'text'})
      .pipe(
        map((data) => this.serializer.fromJson(data) as T),
        catchError(this.errorHandl)
      );
  }

  // DELETE methode
  public delete(id: number) {
    return this.httpClient
      .delete(`${this.url}/${this.endpoint}/${id}`, { responseType: 'text'})
      .pipe(
        catchError(this.errorHandl)
      );
  }

  // Error handling
  protected errorHandl(error) {
    const err: ErrorJSON = JSON.parse(error.error);
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nInfo: ${err.message}`;
    }
    return throwError(errorMessage);
  }
}

interface ErrorJSON {
  error: string;
  message: string;
  path: string;
  status: number;
  timestamp: Date;
  trace: string;
  version: string;
}
