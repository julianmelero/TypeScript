export class MyDate {
  public year: number ;
  public month: number;
  private day: number;

  constructor (year:number, month: number, day: number) {
    this.year = year;
    this.month = month ?? 1;
    this.day = day ?? 1;
  }

  public printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
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

  getDay() {
    return this.day;
  }

  private addPadding(value: number) {
    if(value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }
}

const myDate = new MyDate(2022, 8, 4);

/* You can't do that with private
console.log(myDate.day);

myDate.day = 12;

console.log(myDate.day);
*/

console.log(myDate.printFormat());
//myDate.addPadding();
myDate.getDay();

