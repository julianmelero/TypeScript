class MyDate {
  year: number ;
  month: number;
  day: number;

  constructor (year:number, month: number, day: number) {
    this.year = year;
    this.month = month ?? 1;
    this.day = day ?? 1;
  }
}


const myDate = new MyDate(2022, 8, 4);

console.log(myDate);
