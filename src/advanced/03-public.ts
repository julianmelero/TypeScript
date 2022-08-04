export class MyDate {
  public year: number ;
  public month: number;
  public day: number;

  constructor (year:number, month: number, day: number) {
    this.year = year;
    this.month = month ?? 1;
    this.day = day ?? 1;
  }

  public printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  public add(amount:number, type: 'days' | 'month' | 'years') {
    if(type === 'days') {
      this.day += amount;
    }
    if(type === 'month') {
      this.month += amount;
    }
    if(type === 'years') {
      this.year += amount;
    }
  }
}

const myDate = new MyDate(2022, 8, 4);

console.log(myDate.day);

myDate.day = 12;

console.log(myDate.day);
