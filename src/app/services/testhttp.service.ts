import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../layout/test/test.component';

@Injectable({
  providedIn: 'root'
})
export class TesthttpService {

  private BASE_URL = 'http://localhost:8080/api/usersA';

  constructor(private http: HttpClient) { }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.BASE_URL, post);
  }
}
