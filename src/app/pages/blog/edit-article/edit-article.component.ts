import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { random } from 'lodash';
import { loadOneArticle } from '../../../store/blog/blog.actions';
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

  constructor(private store: Store) {
    this.formArticle = new FormGroup({
      title: new FormControl(''),
      thumbnail: new FormControl(''),
      description: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.store.select(getArticle).subscribe({
      next: (res) => {
        console.log('response: ', res);
        this.formArticle.patchValue({ ...res });
      },
    });
  }

  editArticle() {
    console.log('edit');
    this.formArticle.reset();
    this.closeModal();
  }

  updateArticle() {}

  closeModal() {
    this.isOpen = false;
    this.close.emit();
  }
}
