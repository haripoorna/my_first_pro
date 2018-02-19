import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployereditprofileComponent } from './employereditprofile.component';

describe('EmployereditprofileComponent', () => {
  let component: EmployereditprofileComponent;
  let fixture: ComponentFixture<EmployereditprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployereditprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployereditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
