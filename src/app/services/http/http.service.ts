import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Serializer } from '../../model/Serializer/serializer';
import { Resource } from '../../model/resource';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService<T extends Resource> {
  private obs = new BehaviorSubject<Array<T>>([]);
  obj$ = this.obs.asObservable();
  private url = 'http://localhost:8080/harmony/api';

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
        map(data => this.serializer.fromJson(data) as T)
      );
  }

  // GET methode
  public read(id: number): Observable<T> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}/${id}`)
      .pipe(
        map((data: any) => this.serializer.fromJson(data) as T)
      );
  }

  // PUT methode
  public update(item: T): Observable<T> {
    return this.httpClient.put<T>(`${this.url}/${this.endpoint}/${item.id}`,
      this.serializer.toJson(item))
      .pipe(
        map((data) => this.serializer.fromJson(data) as T)
      );
  }

  // DELETE methode
  public delete(id: number) {
    return this.httpClient
      .delete(`${this.url}/${this.endpoint}/${id}`);
  }

  // GET methode
  public showAll(): Observable<T[]> {
    return this.httpClient
      .get<T[]>(`${this.url}/${this.endpoint}`);
  }

  // TODO
  // PATCHE methode

}
