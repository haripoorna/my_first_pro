import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeStudentlistComponent } from './college-studentlist.component';

describe('CollegeStudentlistComponent', () => {
  let component: CollegeStudentlistComponent;
  let fixture: ComponentFixture<CollegeStudentlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeStudentlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeStudentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
