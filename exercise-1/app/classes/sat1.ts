export class SAT1 {
  id: number;
  month: number;
  year: number;
  testScore: number;
  readingScore: number;
  writingScore: number;
  mathsScore: number;
  constructor(id:number,month:number,year:number) {
    this.id = id;
    this.month = month;
    this.year = year;
    this.readingScore = 0;
    this.mathsScore = 0;
    this.writingScore = 0;
    this.testScore = 0;
  }

  getId() : number {
    return this.id;
  }

  setMonth(m: number) {
    this.month = m;
  }

  setYear(y: number) {
    this.year = y;
  }

  setWritingScore(sc: number) {
    this.writingScore = sc;
  }

  setMathsScore(sc: number) {
    this.mathsScore = sc;
  }

  setReadingScore(sc: number) {
    this.readingScore = sc;
  }

  getTotalScore() : number {
    var val = 0;
    if(this.writingScore > 0) val += parseInt(this.writingScore);
    if(this.readingScore > 0) val += parseInt(this.readingScore);
    if(this.mathsScore > 0) val += parseInt(this.mathsScore);
    return val;
  }
}