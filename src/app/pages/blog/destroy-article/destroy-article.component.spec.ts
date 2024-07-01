import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroyArticleComponent } from './destroy-article.component';

describe('DestroyArticleComponent', () => {
  let component: DestroyArticleComponent;
  let fixture: ComponentFixture<DestroyArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestroyArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestroyArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
