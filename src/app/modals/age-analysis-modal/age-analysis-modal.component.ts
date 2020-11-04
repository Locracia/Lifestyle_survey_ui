import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { SurveyAnalysisService } from "src/app/services/surveyAnalysis.service";

@Component({
  selector: "app-age-analysis-modal",
  templateUrl: "./age-analysis-modal.component.html",
  styleUrls: ["./age-analysis-modal.component.css"],
})
export class AgeAnalysisModalComponent implements OnInit {
  ageStatistics;
  constructor(
    public modal: NgbActiveModal,
    private surveyAnalysisService: SurveyAnalysisService
  ) {}

  ngOnInit() {
    this.surveyAnalysisService
      .getAgeAnalysis()
      .then((stats) => (this.ageStatistics = stats.candidateAgeAnalysis));
  }
}
