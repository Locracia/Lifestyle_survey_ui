import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeAnalysisModalComponent } from './age-analysis-modal.component';

describe('AgeAnalysisModalComponent', () => {
  let component: AgeAnalysisModalComponent;
  let fixture: ComponentFixture<AgeAnalysisModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeAnalysisModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeAnalysisModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
