import { Component, inject, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppStore } from '../../../store/app.states';
import { selectCount } from '../../../store/counter/counter.selectors';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { getToken } from '../../../store/auth/auth.selectors';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  store = inject(Store);

  token: string | undefined;

  ngOnInit(): void {
    this.store.select(getToken).subscribe({
      next: (res) => {
        this.token = res;
      },
    });
  }
}
