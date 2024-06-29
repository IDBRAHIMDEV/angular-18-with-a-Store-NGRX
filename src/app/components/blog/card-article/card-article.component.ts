import { Component, Input } from '@angular/core';
import { Blog } from '../../../store/blog/blog.model';

@Component({
  selector: 'app-card-article',
  standalone: true,
  imports: [],
  templateUrl: './card-article.component.html',
  styleUrl: './card-article.component.css',
})
export class CardArticleComponent {
  @Input() article!: Blog;
}
