import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { SurveyAnalysisService } from "src/app/services/surveyAnalysis.service";

@Component({
  selector: "app-activities-analysis-modal",
  templateUrl: "./activities-analysis-modal.component.html",
  styleUrls: ["./activities-analysis-modal.component.css"],
})
export class ActivitiesAnalysisModalComponent implements OnInit {
  activityStatistics;
  constructor(
    public modal: NgbActiveModal,
    private surveyAnalysisService: SurveyAnalysisService
  ) {}

  ngOnInit() {
    this.surveyAnalysisService
      .getActiveAnalysis()
      .then((stats) => (this.activityStatistics = stats.activityAnalysis));
  }
}
