import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerregistrationComponent } from './employerregistration.component';

describe('EmployerregistrationComponent', () => {
  let component: EmployerregistrationComponent;
  let fixture: ComponentFixture<EmployerregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
