import { Component, inject, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppStore } from '../../../store/app.states';
import { selectCount } from '../../../store/counter/counter.selectors';
import { AsyncPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { getToken } from '../../../store/auth/auth.selectors';
import { logout } from '../../../store/auth/auth.actions';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  store = inject(Store);
  router = inject(Router);

  token: string | undefined;

  ngOnInit(): void {
    this.store.select(getToken).subscribe({
      next: (res) => {
        this.token = res;
      },
    });
  }

  logout() {
    this.store.dispatch(logout());
    this.router.navigate(['/auth/login']);
  }
}
