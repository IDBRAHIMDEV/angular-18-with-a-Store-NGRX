import { Component, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppStore } from '../../../store/app.states';
import { selectCount } from '../../../store/counter/counter.selectors';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  count$ = inject(Store<AppStore>).select(selectCount);
}
