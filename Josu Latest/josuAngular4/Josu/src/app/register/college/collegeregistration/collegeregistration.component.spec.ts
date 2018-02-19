import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeregistrationComponent } from './collegeregistration.component';

describe('CollegeregistrationComponent', () => {
  let component: CollegeregistrationComponent;
  let fixture: ComponentFixture<CollegeregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
