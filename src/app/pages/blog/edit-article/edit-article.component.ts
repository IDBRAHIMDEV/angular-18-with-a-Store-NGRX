import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { random } from 'lodash';
import { loadOneArticle } from '../../../store/blog/blog.actions';
import { Observable } from 'rxjs';
import { Blog } from '../../../store/blog/blog.model';

@Component({
  selector: 'app-edit-article',
  standalone: true,
  imports: [],
  templateUrl: './edit-article.component.html',
  styleUrl: './edit-article.component.css',
})
export class EditArticleComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter();

  formArticle!: FormGroup;

  article$!: Observable<Blog>;

  constructor(private store: Store) {
    this.formArticle = new FormGroup({
      title: new FormControl(''),
      thumbnail: new FormControl(''),
      description: new FormControl(''),
    });
  }

  editArticle() {
    console.log('edit');

    this.store.dispatch(loadOneArticle({ id: 3 }));
    this.formArticle.reset();
    this.closeModal();
  }

  closeModal() {
    this.isOpen = false;
    this.close.emit();
  }
}
