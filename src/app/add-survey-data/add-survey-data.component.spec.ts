import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSurveyDataComponent } from './add-survey-data.component';

describe('AddSurveyDataComponent', () => {
  let component: AddSurveyDataComponent;
  let fixture: ComponentFixture<AddSurveyDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSurveyDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSurveyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
