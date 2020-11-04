import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { SurveyAnalysisService } from "src/app/services/surveyAnalysis.service";

@Component({
  selector: "app-meals-analysis-modal",
  templateUrl: "./meals-analysis-modal.component.html",
  styleUrls: ["./meals-analysis-modal.component.css"],
})
export class MealsAnalysisModalComponent implements OnInit {
  mealStatistics;
  constructor(
    public modal: NgbActiveModal,
    private surveyAnalysisService: SurveyAnalysisService
  ) {}

  ngOnInit() {
    this.surveyAnalysisService
      .getMealAnalysis()
      .then((stats) => (this.mealStatistics = stats.mealAnalysis));
  }
}
