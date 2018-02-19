import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeEmployerlistComponent } from './college-employerlist.component';

describe('CollegeEmployerlistComponent', () => {
  let component: CollegeEmployerlistComponent;
  let fixture: ComponentFixture<CollegeEmployerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeEmployerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeEmployerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
