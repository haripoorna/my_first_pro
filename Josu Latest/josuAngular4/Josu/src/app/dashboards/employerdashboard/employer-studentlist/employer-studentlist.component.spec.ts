import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerStudentlistComponent } from './employer-studentlist.component';

describe('EmployerStudentlistComponent', () => {
  let component: EmployerStudentlistComponent;
  let fixture: ComponentFixture<EmployerStudentlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerStudentlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerStudentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
