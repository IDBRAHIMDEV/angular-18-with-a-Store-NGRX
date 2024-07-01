import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { random } from 'lodash';
import {
  loadOneArticle,
  updateArticle,
} from '../../../store/blog/blog.actions';
import { Observable } from 'rxjs';
import { Blog } from '../../../store/blog/blog.model';
import { NgClass } from '@angular/common';
import { getArticle } from '../../../store/blog/blog.selectors';

@Component({
  selector: 'app-edit-article',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './edit-article.component.html',
  styleUrl: './edit-article.component.css',
})
export class EditArticleComponent implements OnInit {
  @Input() isOpen = false;
  @Output() close = new EventEmitter();

  formArticle!: FormGroup;

  article$!: Observable<Blog>;
  id: number = 0;

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
        updateOn: 'submit',
      }
    );
  }

  ngOnInit(): void {
    this.store.select(getArticle).subscribe({
      next: (res) => {
        console.log('response: ', res);
        this.id = res?.id || 0;
        this.formArticle.patchValue({ ...res });
      },
    });
  }

  updateArticle() {
    if (this.formArticle.invalid) {
      for (let field in this.formArticle.controls) {
        const control = this.formArticle.get(field);
        control?.markAsDirty({ onlySelf: true });
      }
      return;
    }

    const article: Blog = {
      ...this.formArticle.value,
      id: this.id,
    };

    this.store.dispatch(updateArticle({ article }));
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
