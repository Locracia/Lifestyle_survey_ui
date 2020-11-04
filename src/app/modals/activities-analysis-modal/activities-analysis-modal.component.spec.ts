import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesAnalysisModalComponent } from './activities-analysis-modal.component';

describe('ActivitiesAnalysisModalComponent', () => {
  let component: ActivitiesAnalysisModalComponent;
  let fixture: ComponentFixture<ActivitiesAnalysisModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesAnalysisModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesAnalysisModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
