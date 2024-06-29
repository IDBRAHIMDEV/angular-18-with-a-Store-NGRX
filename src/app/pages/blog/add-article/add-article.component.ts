import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { addArticle } from '../../../store/blog/blog.actions';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { random } from 'lodash';

@Component({
  selector: 'app-add-article',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css',
})
export class AddArticleComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter();

  formArticle!: FormGroup;

  constructor(private store: Store) {
    this.formArticle = new FormGroup({
      title: new FormControl(''),
      thumbnail: new FormControl(''),
      description: new FormControl(''),
    });
  }

  addNewArticle() {
    console.log('add');
    const newArticle = {
      ...this.formArticle.value,
      id: random(4, 110000),
    };

    console.log(newArticle);
    this.store.dispatch(addArticle({ article: newArticle }));
    this.formArticle.reset();
    this.closeModal();
  }

  closeModal() {
    this.isOpen = false;
    this.close.emit();
  }
}
