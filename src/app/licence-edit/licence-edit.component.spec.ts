import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenceEditComponent } from './licence-edit.component';

describe('LicenceEditComponent', () => {
  let component: LicenceEditComponent;
  let fixture: ComponentFixture<LicenceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenceEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
