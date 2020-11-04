import { Component, OnInit } from "@angular/core";
import { ActivitiesAnalysisModalComponent } from "src/app/modals/activities-analysis-modal/activities-analysis-modal.component";
import { AgeAnalysisModalComponent } from "src/app/modals/age-analysis-modal/age-analysis-modal.component";
import { MealsAnalysisModalComponent } from "src/app/modals/meals-analysis-modal/meals-analysis-modal.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-survey-data-analysis",
  templateUrl: "./survey-data-analysis.component.html",
  styleUrls: ["./survey-data-analysis.component.css"],
})
export class SurveyDataAnalysisComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  openAgeAnalysis() {
    const ageAnalysisRef = this.modalService.open(AgeAnalysisModalComponent, {
      centered: true,
    });
  }

  openActivityAnalysis() {
    const activityAnalysisRef = this.modalService.open(
      ActivitiesAnalysisModalComponent,
      { centered: true }
    );
  }

  openMealsAnalysis() {
    const mealsAnalysisRef = this.modalService.open(
      MealsAnalysisModalComponent,
      { centered: true }
    );
  }

  ngOnInit() {}
}
