import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AddSurveyService {
  endPoint = "http://localhost:3000/api/";

  constructor(private http: HttpClient) {}

  submitSurveyData(surveyData) {
    let url = this.endPoint + "candidate/survey";

    let data = surveyData;

    const options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      params: {},
    };

    return this.http.post<any>(url, data, options).toPromise<any>();
  }
}
