import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDesignComponent } from './list-design.component';

describe('ListDesignComponent', () => {
  let component: ListDesignComponent;
  let fixture: ComponentFixture<ListDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
