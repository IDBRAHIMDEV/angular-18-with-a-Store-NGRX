import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Blog } from '../store/blog/blog.model';
import { Observable } from 'rxjs';
import { omit } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  apiUrl = 'http://localhost:3000/articles';

  http = inject(HttpClient);

  _getAllArticles(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.apiUrl);
  }

  _persistArticle(data: Blog): Observable<Blog> {
    return this.http.post<Blog>(this.apiUrl, data);
  }

  _getOneArticle(id: number): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUrl}/${id}`);
  }

  _updateArticle(id: number, data: Blog): Observable<Blog> {
    console.log('update service', omit(data, 'id'));
    return this.http.put<Blog>(`${this.apiUrl}/${id}`, omit(data, 'id'));
  }

  _deleteArticle(id: number): Observable<Object> {
    return this.http.delete<Object>(`${this.apiUrl}/${id}`);
  }
}
