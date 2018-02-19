import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerCollegelistComponent } from './employer-collegelist.component';

describe('EmployerCollegelistComponent', () => {
  let component: EmployerCollegelistComponent;
  let fixture: ComponentFixture<EmployerCollegelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerCollegelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerCollegelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
