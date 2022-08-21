import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenceDashboardComponent } from './licence-dashboard.component';

describe('LicenceDashboardComponent', () => {
  let component: LicenceDashboardComponent;
  let fixture: ComponentFixture<LicenceDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenceDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
