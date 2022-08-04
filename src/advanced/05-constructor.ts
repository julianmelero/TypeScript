export class MyDate {


  constructor (
    public year:number = 2022,
    public month: number = 1,
    private day: number = 1
    ) {}

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

const myDate = new MyDate(2023, 8, 4);
console.log(myDate.printFormat());

const myDate2 = new MyDate(2022);
console.log(myDate2.printFormat());
