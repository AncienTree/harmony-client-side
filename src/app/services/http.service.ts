import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Serializer } from '../model/Serializer/serializer';
import { Resource } from '../model/resource';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService<T extends Resource> {

  private url = 'http://localhost:8080/api';

  constructor(
    private httpClient: HttpClient,
    private endpoint: string,
    private serializer: Serializer) { }

    public create(item: T): Observable<T> {
      return this.httpClient.post<T>(`${this.url}/${this.endpoint}`,
          this.serializer.toJson(item))
           .pipe(map(data => this.serializer.fromJson(data) as T));
    }

      public read(id: number): Observable<T> {
        return this.httpClient
        .get(`${this.url}/${this.endpoint}/${id}`)
        .pipe(map((data: any) => this.serializer.fromJson(data) as T));
      }

  }
