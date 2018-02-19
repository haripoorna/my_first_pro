import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerprofessionaldetailsComponent } from './employerprofessionaldetails.component';

describe('EmployerprofessionaldetailsComponent', () => {
  let component: EmployerprofessionaldetailsComponent;
  let fixture: ComponentFixture<EmployerprofessionaldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerprofessionaldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerprofessionaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
