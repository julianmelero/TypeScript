export class MyDate {

  constructor (
    public year:number = 2022,
    public month: number = 1,
    private _day: number = 1
    ) {}

  public printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  public add(amount:number, type: 'days' | 'month' | 'years') {
    if(type === 'days') {
      this._day += amount;
    }
    if(type === 'month') {
      this.month += amount;
    }
    if(type === 'years') {
      this.year += amount;
    }
  }

  get day() {
    return this._day;
  }

  get isLeapYear():boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  private addPadding(value: number) {
    if(value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }
}

const myDate = new MyDate(2023, 8, 4);
const myDate2 = new MyDate(2000, 8, 4);
console.log(myDate.printFormat());

console.log(myDate.day);
console.log(myDate.isLeapYear);
console.log(myDate2.isLeapYear);
