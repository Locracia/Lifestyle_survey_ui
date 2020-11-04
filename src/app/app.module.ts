import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddSurveyDataComponent } from "./add-survey-data/add-survey-data.component";
import { SurveyDataAnalysisComponent } from "./survey-data-analysis/survey-data-analysis.component";
import { AgeAnalysisModalComponent } from "./modals/age-analysis-modal/age-analysis-modal.component";
import { ActivitiesAnalysisModalComponent } from "./modals/activities-analysis-modal/activities-analysis-modal.component";
import { MealsAnalysisModalComponent } from "./modals/meals-analysis-modal/meals-analysis-modal.component";

import { HttpClientModule } from "@angular/common/http";

import { SurveyAnalysisService } from "src/app/services/surveyAnalysis.service";
import { AddSurveyService } from "src/app/services/addSurvey.service";
import { LandingPageComponent } from "./landing-page/landing-page.component";

@NgModule({
  declarations: [
    AppComponent,
    AddSurveyDataComponent,
    SurveyDataAnalysisComponent,
    AgeAnalysisModalComponent,
    ActivitiesAnalysisModalComponent,
    MealsAnalysisModalComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [SurveyAnalysisService, AddSurveyService],
  bootstrap: [AppComponent],
  entryComponents: [
    MealsAnalysisModalComponent,
    ActivitiesAnalysisModalComponent,
    AgeAnalysisModalComponent,
  ],
})
export class AppModule {}
