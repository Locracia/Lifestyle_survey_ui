import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddSurveyDataComponent } from "src/app/add-survey-data/add-survey-data.component";
import { SurveyDataAnalysisComponent } from "src/app/survey-data-analysis/survey-data-analysis.component";
import { LandingPageComponent } from "src/app/landing-page/landing-page.component";

const routes: Routes = [
  { path: "", redirectTo: "landingPage", pathMatch: "full" },
  { path: "landingPage", component: LandingPageComponent },
  { path: "surveyAnalysis", component: SurveyDataAnalysisComponent },
  { path: "addSurveyData", component: AddSurveyDataComponent },
  { path: "**", component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
