import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardToolsComponent } from './dashboard.tools.component';

describe('DashboardComponent', () => {
  let component: DashboardToolsComponent;
  let fixture: ComponentFixture<DashboardToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
