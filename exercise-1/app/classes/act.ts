export class ACT {
  id: number;
  month: number;
  year: number;
  testScore: number;
  englishScore: number;
  reasoningScore: number;
  mathsScore: number;
  scienceScore: number;
  constructor(id:number,month:number,year:number) {
    this.id = id;
    this.month = month;
    this.year = year;
    this.englishScore = 0;
    this.mathsScore = 0;
    this.reasoningScore = 0;
    this.scienceScore = 0;
    this.testScore = 0
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

  setReasoningScore(sc: number) {
    this.reasoningScore = sc;
  }

  setMathsScore(sc: number) {
    this.mathsScore = sc;
  }

  setEnglishScore(sc: number) {
    this.englishScore = sc;
  }

  setScienceScore(sc: number) {
    this.scienceScore = sc;
  }

  getTotalScore() : number {
    var val = 0;
    if(this.reasoningScore > 0) val += parseInt(this.reasoningScore);
    if(this.englishScore > 0) val += parseInt(this.englishScore);
    if(this.mathsScore > 0) val += parseInt(this.mathsScore);
    if(this.scienceScore > 0) val += parseInt(this.scienceScore);
    return val;
  }
}