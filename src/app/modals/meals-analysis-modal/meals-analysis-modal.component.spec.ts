import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsAnalysisModalComponent } from './meals-analysis-modal.component';

describe('MealsAnalysisModalComponent', () => {
  let component: MealsAnalysisModalComponent;
  let fixture: ComponentFixture<MealsAnalysisModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealsAnalysisModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsAnalysisModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
