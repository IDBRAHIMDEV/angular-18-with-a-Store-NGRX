import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Blog } from '../store/blog/blog.model';
import { Observable } from 'rxjs';

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

  _getOneArticle(id: number | string): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUrl}/${id}`);
  }

  _updateArticle(id: number | string, data: Blog): Observable<Blog> {
    return this.http.put<Blog>(`${this.apiUrl}/${id}`, data);
  }

  _deleteArticle(id: number | string): Observable<Blog> {
    return this.http.delete<Blog>(`${this.apiUrl}/${id}`);
  }
}
