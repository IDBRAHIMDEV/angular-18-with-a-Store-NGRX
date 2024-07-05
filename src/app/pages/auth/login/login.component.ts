import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from '../../../store/auth/auth.actions';
import { getAuthError, getToken } from '../../../store/auth/auth.selectors';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userName = 'mor_2314';
  pass = '83r5^_';

  loginForm!: FormGroup;
  errorMessage$!: Observable<string>;

  constructor(private store: Store, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[A-Za-zd]{6,}$'),
      ]),
    });
  }

  login() {
    const credential = {
      ...this.loginForm.value,
    };
    this.store.dispatch(login({ credential }));
    this.store.select(getToken).subscribe({
      next: (res) => {
        if (res) {
          this.router.navigate(['/blog']);
        } else {
          this.errorMessage$ = this.store.select(getAuthError);
        }
      },
    });
  }

  copy() {
    this.loginForm.patchValue({ username: this.userName, password: this.pass });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
