export class TOEFL {
  id: number;
  month: number;
  year: number;
  testScore: number;
  readingScore: number;
  writingScore: number;
  listeningScore: number;
  speakingScore: number;
  constructor(id:number,month:number,year:number) {
    this.id = id;
    this.month = month;
    this.year = year;
    this.readingScore = 0;
    this.listeningScore = 0;
    this.writingScore = 0;
    this.speakingScore = 0;
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

  setWritingScore(sc: number) {
    this.writingScore = sc;
  }

  setListeningScore(sc: number) {
    this.listeningScore = sc;
  }

  setReadingScore(sc: number) {
    this.readingScore = sc;
  }

  setSpeakingScore(sc: number) {
    this.speakingScore = sc;
  }

  getTotalScore() : number {
    var val = 0;
    if(this.writingScore > 0) val += parseInt(this.writingScore);
    if(this.readingScore > 0) val += parseInt(this.readingScore);
    if(this.listeningScore > 0) val += parseInt(this.listeningScore);
    if(this.speakingScore > 0) val += parseInt(this.speakingScore);
    return val;
  }
}