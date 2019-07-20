import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponentsComponent } from './list-components.component';

describe('ListComponentsComponent', () => {
  let component: ListComponentsComponent;
  let fixture: ComponentFixture<ListComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
