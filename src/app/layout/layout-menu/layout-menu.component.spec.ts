import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMenuComponent } from './layout-menu.component';

describe('LayoutMenuComponent', () => {
  let component: LayoutMenuComponent;
  let fixture: ComponentFixture<LayoutMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
