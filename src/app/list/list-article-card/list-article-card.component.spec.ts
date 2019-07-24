import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArticleCardComponent } from './list-article-card.component';

describe('ListArticleCardComponent', () => {
  let component: ListArticleCardComponent;
  let fixture: ComponentFixture<ListArticleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListArticleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListArticleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
