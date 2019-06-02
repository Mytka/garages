import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGaragesComponent } from './list-garages.component';

describe('ListGaragesComponent', () => {
  let component: ListGaragesComponent;
  let fixture: ComponentFixture<ListGaragesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGaragesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGaragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
