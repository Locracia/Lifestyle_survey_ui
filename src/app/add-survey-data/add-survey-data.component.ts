import { Component, OnInit } from "@angular/core";
import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";
import { AddSurveyService } from "src/app/services/addSurvey.service";

@Component({
  selector: "app-add-survey-data",
  templateUrl: "./add-survey-data.component.html",
  styleUrls: ["./add-survey-data.component.css"],
})
export class AddSurveyDataComponent implements OnInit {
  first_name = "";
  last_name = "";
  contact_number = "";
  age = "";

  favouriteFoods = [
    { food: "Pizza", foodKey: "PIZZA", checked: false },
    { food: "Pasta", foodKey: "PASTA", checked: false },
    { food: "Pap and Wors", foodKey: "PAP_AND_WORS", checked: false },
    { food: "Chicken Stir Fry", foodKey: "CHICKEN_STIR_FRY", checked: false },
    { food: "Other", foodKey: "OTHER", checked: false },
    { food: "Beef Stir Fry", foodKey: "BEEF_STIR_FRY", checked: false },
  ];

  pizza = 0;
  pasta = 0;
  pap_and_wors = 0;
  chicken_and_stir_fry = 0;
  other = 0;
  beef_stir_fry = 0;

  i_like_to_eat_out = 0;
  i_like_to_watch_movies = 0;
  i_like_to_watch_tv = 0;
  i_like_to_listen_to_the_radio = 0;

  constructor(
    public config: NgbRatingConfig,
    private addSurveyService: AddSurveyService
  ) {
    config.max = 5;
    config.readonly = false;
  }

  ngOnInit() {}

  selectFavouriteFood(event, food: string) {
    switch (food) {
      case "PIZZA":
        this.pizza === 0 ? (this.pizza = 1) : (this.pizza = 0);
        break;
      case "PASTA":
        this.pasta === 0 ? (this.pasta = 1) : (this.pasta = 0);
        break;
      case "PAP_AND_WORS":
        this.pap_and_wors === 0
          ? (this.pap_and_wors = 1)
          : (this.pap_and_wors = 0);
        break;
      case "CHICKEN_STIR_FRY":
        this.chicken_and_stir_fry === 0
          ? (this.chicken_and_stir_fry = 1)
          : (this.chicken_and_stir_fry = 0);
        break;
      case "OTHER":
        this.other === 0 ? (this.other = 1) : (this.other = 0);
        break;
      case "BEEF_STIR_FRY":
        this.beef_stir_fry === 0
          ? (this.beef_stir_fry = 1)
          : (this.beef_stir_fry = 0);
        break;
    }
  }

  submitData() {
    let meal = {
      pizza: this.pizza,
      pasta: this.pasta,
      pap_and_wors: this.pap_and_wors,
      chicken_and_stir_fry: this.chicken_and_stir_fry,
      other: this.other,
      beef_stir_fry: this.beef_stir_fry,
    };

    let activity = {
      i_like_to_eat_out: this.i_like_to_eat_out,
      i_like_to_watch_movies: this.i_like_to_watch_movies,
      i_like_to_watch_tv: this.i_like_to_watch_tv,
      i_like_to_listen_to_the_radio: this.i_like_to_listen_to_the_radio,
    };

    let survey = {
      first_name: this.first_name,
      last_name: this.last_name,
      contact_number: this.contact_number,
      age: this.age,
      meal: meal,
      activity: activity,
    };

    this.addSurveyService.submitSurveyData(survey).then(() => {
      this.clearVariableValues();
    });
  }

  clearVariableValues() {
    this.first_name = "";
    this.last_name = "";
    this.contact_number = "";
    this.age = "";

    this.pizza = 0;
    this.pasta = 0;
    this.pap_and_wors = 0;
    this.chicken_and_stir_fry = 0;
    this.other = 0;
    this.beef_stir_fry = 0;

    this.i_like_to_eat_out = 0;
    this.i_like_to_watch_movies = 0;
    this.i_like_to_watch_tv = 0;
    this.i_like_to_listen_to_the_radio = 0;

    this.favouriteFoods.forEach((food) => (food.checked = false));
  }
}
