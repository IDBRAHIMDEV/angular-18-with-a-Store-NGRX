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
}
