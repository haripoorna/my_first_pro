import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeeditprofileComponent } from './collegeeditprofile.component';

describe('CollegeeditprofileComponent', () => {
  let component: CollegeeditprofileComponent;
  let fixture: ComponentFixture<CollegeeditprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeeditprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeeditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
