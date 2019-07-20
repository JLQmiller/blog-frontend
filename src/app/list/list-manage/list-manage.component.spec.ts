import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListManageComponent } from './list-manage.component';

describe('ListManageComponent', () => {
  let component: ListManageComponent;
  let fixture: ComponentFixture<ListManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
