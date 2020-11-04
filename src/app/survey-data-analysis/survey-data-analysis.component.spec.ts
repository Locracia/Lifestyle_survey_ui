import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyDataAnalysisComponent } from './survey-data-analysis.component';

describe('SurveyDataAnalysisComponent', () => {
  let component: SurveyDataAnalysisComponent;
  let fixture: ComponentFixture<SurveyDataAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyDataAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyDataAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
