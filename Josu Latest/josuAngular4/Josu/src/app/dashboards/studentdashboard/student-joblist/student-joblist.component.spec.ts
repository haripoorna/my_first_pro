import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentJoblistComponent } from './student-joblist.component';

describe('StudentJoblistComponent', () => {
  let component: StudentJoblistComponent;
  let fixture: ComponentFixture<StudentJoblistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentJoblistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentJoblistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
