import {Component, bootstrap, NgFor, FORM_DIRECTIVES} from 'angular2/angular2';
import {SAT1} from 'app/classes/sat1.ts';
import {ACT} from 'app/classes/act.ts';
import {TOEFL} from 'app/classes/toefl.ts';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html',
  directives: [NgFor, FORM_DIRECTIVES]
})

class MainComponent {
  sat1: Array<SAT1>;
  act: Array<ACT>;
  toefl: Array<TOEFL>;
  next_id: number;
  d: Date;
  months: Array<Object>;
  years: Array<number>;

  constructor() {
    this.sat1 = [];
    this.act = [];
    this.toefl = [];
    this.next_id = 0;
    this.d = new Date;
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

    this.years = [];
    for(let i = this.d.getFullYear()-5; i<=this.d.getFullYear()+5; i++) {
      this.years.push(i);
    }

    this.sat1.push(new SAT1(this.next_id++,this.d.getMonth(),this.d.getFullYear()));
    this.act.push(new ACT(this.next_id++,this.d.getMonth(),this.d.getFullYear()));
    this.toefl.push(new TOEFL(this.next_id++,this.d.getMonth(),this.d.getFullYear()));
  }

  removeSat(id: number) {
    if(this.sat1.length>1) {
      this.sat1 = this.sat1.filter(function (obj) {
        return obj.id != id;
      })
    }
  }

  addSat() {
    this.sat1.push(new SAT1(++this.next_id,this.d.getMonth(),this.d.getFullYear()));
  }

  removeAct(id: number) {
    if(this.act.length>1) {
      this.act = this.act.filter(function (obj) {
        return obj.id != id;
      })
    }
  }

  addAct() {
    this.act.push(new ACT(++this.next_id,this.d.getMonth(),this.d.getFullYear()));
  }

  removeToefl(id: number) {
    if(this.toefl.length>1) {
      this.toefl = this.toefl.filter(function (obj) {
        return obj.id != id;
      })
    }
  }

  addToefl() {
    this.toefl.push(new TOEFL(++this.next_id,this.d.getMonth(),this.d.getFullYear()));
  }
}


bootstrap(MainComponent);