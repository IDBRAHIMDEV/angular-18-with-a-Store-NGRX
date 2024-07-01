import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { addArticle } from '../../../store/blog/blog.actions';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
    this.formArticle = new FormGroup(
      {
        title: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
        ]),
        thumbnail: new FormControl('', [
          Validators.required,
          Validators.pattern(
            '^https://process.fs.teachablecdn.com/[A-Za-z0-9]+/resize=width:[0-9]+/https://cdn.filestackcontent.com/[A-Za-z0-9]+$'
          ),
        ]),
        description: new FormControl('', [
          Validators.required,
          Validators.minLength(10),
        ]),
      },
      {
        updateOn: 'blur',
      }
    );
  }

  addNewArticle() {
    if (this.formArticle.invalid) {
      for (let field in this.formArticle.controls) {
        const control = this.formArticle.get(field);
        control?.markAsDirty({ onlySelf: true });
      }
      return;
    }

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

  get title() {
    return this.formArticle.get('title');
  }

  get description() {
    return this.formArticle.get('description');
  }

  get thumbnail() {
    return this.formArticle.get('thumbnail');
  }
}
