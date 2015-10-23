import {Component, View} from 'angular2/angular2';

import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/angular2';

import {MainComponent} from 'app/app.ts';

@Component({
  selector: 'test-form'
})
@View({
  templateUrl: 'client/parties-form/parties-form.html',
  directives: [FORM_DIRECTIVES]
})
export class SatForm {
  satForm : ControlGroup;
  months: Array<Object>;
  years: Array<number>;
  d: Date;

  constructor() {
    this.months = [
      {
        'value' : 0,
        'name' : "January"
      },
      {
        'value' : 1,
        'name' : "February"
      },
      {
        'value' : 2,
        'name' : "March"
      },
      {
        'value' : 3,
        'name' : "April"
      },
      {
        'value' : 4,
        'name' : "May"
      },
      {
        'value' : 5,
        'name' : "June"
      },
      {
        'value' : 6,
        'name' : "July"
      },
      {
        'value' : 7,
        'name' : "August"
      },
      {
        'value' : 8,
        'name' : "September"
      },
      {
        'value' : 9,
        'name' : "October"
      },
      {
        'value' : 10,
        'name' : "November"
      },
      {
        'value' : 11,
        'name' : "December"
      }
    ];
    this.d = new Date;

    this.years = [];
    for(let i = d.getFullYear-5; i<=d.getFullYear()+5; i++) {
      this.years.push(i);
    }

    var builder = new FormBuilder();
    this.satForm = builder.group({
      month : [''],
      year : [''],
      readingScore : [''],
      writingScore : [''],
      mathsScore : ['']
    })
  }

  addTest(form) {
    MainComponent.addSat(form.month, form.year, form.readingScore, form.writingScore, form.mathsScore)
  }
}