import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class SurveyAnalysisService {
  endPoint = "http://localhost:3000/api/";

  constructor(private http: HttpClient) {}

  getAgeAnalysis() {
    let url = this.endPoint + "analysis/age";

    const options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      params: {},
    };

    return this.http.get<any>(url, options).toPromise<any>();
  }

  getMealAnalysis() {
    let url = this.endPoint + "analysis/meal";

    const options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      params: {},
    };

    return this.http.get<any>(url, options).toPromise<any>();
  }

  getActiveAnalysis() {
    let url = this.endPoint + "analysis/activity";

    const options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      params: {},
    };

    return this.http.get<any>(url, options).toPromise<any>();
  }
}
