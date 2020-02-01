import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resource } from '../../model/resource';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
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
    return this.httpClient.post<T>(`${this.url}/${this.endpoint}`,
      this.serializer.toJson(item))
      .pipe(
        map(data => this.serializer.fromJson(data) as T),
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // GET methode
  public read(id: number): Observable<T> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}/${id}`)
      .pipe(
        map((data: any) => this.serializer.fromJson(data) as T),
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // GET all methode
  public showAll(): Observable<T[]> {
    return this.httpClient
      .get<T[]>(`${this.url}/${this.endpoint}`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // PUT methode
  public update(item: T): Observable<T> {
    return this.httpClient.put<T>(`${this.url}/${this.endpoint}/${item.id}`,
      this.serializer.toJson(item))
      .pipe(
        map((data) => this.serializer.fromJson(data) as T),
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // DELETE methode
  public delete(id: number) {
    return this.httpClient
      .delete(`${this.url}/${this.endpoint}/${id}`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // Error handling
  protected errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}\nInfo: ${error.error.message}`;
    }
    return throwError(errorMessage);
  }
}
