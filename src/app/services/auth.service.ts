import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Credential, LoginResult } from '../store/auth/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://dummyjson.com/auth/login';
  http = inject(HttpClient);

  signIn(credential: Credential): Observable<LoginResult> {
    return this.http.post<LoginResult>(this.apiUrl, credential);
  }
}
