import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEmployerlistComponent } from './student-employerlist.component';

describe('StudentEmployerlistComponent', () => {
  let component: StudentEmployerlistComponent;
  let fixture: ComponentFixture<StudentEmployerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEmployerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEmployerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
