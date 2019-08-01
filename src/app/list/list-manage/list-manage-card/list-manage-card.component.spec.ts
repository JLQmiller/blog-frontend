import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListManageCardComponent } from './list-manage-card.component';

describe('ListManageCardComponent', () => {
  let component: ListManageCardComponent;
  let fixture: ComponentFixture<ListManageCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListManageCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListManageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
