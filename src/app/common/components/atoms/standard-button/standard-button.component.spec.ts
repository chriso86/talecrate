import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardButtonComponent } from './standard-button.component';

describe('StandardButtonComponent', () => {
  let component: StandardButtonComponent;
  let fixture: ComponentFixture<StandardButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
