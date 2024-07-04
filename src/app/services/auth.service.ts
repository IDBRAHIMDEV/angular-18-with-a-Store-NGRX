import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Credential } from '../store/auth/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://fakestoreapi.com/auth/login';
  http = inject(HttpClient);

  signIn(credential: Credential): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.apiUrl, credential);
  }
}
