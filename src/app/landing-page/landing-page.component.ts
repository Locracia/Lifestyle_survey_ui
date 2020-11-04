import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"],
})
export class LandingPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  routeToSurveyAnalysis() {
    this.router.navigateByUrl("surveyAnalysis");
  }

  routeToAddSurveyData() {
    this.router.navigateByUrl("addSurveyData");
  }
}
