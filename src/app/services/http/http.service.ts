import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Resource } from '../../model/resource';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Serializer } from 'src/app/model/Serializer/serializer';
import { Users } from 'src/app/model/users';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HttpService<T extends Resource> {
  private obs = new BehaviorSubject<Array<T>>([]);
  obj$ = this.obs.asObservable();
  private url = 'http://localhost:8080/api';

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

  public updateStatus(id: number, status: boolean): Observable<any> {
    let user = new Users();
    user.id = id;
    user.login = '';
    user.status = !status;
    user.role  = '';

    console.log(user);
    console.log(JSON.stringify({'id':id, 'login': '', 'status': !status, 'role': ''}));
    return this.httpClient
      .patch(`${this.url}/${this.endpoint}/${id}`, JSON.stringify({'id':id, 'login': '', 'status': !status, 'role': ''}))
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
}

private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
}
}
