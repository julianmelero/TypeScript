// It's use in SOLID
// Create One instance only

export class MyService {

  static instance: MyService | null = null;

  private constructor(
    private name: string
  ){}

  getName() {
    return this.name;
  }

  // Create method create, to create only 1 instance
  static create(name: string) {
    if(MyService.instance === null) {
      MyService.instance = new MyService(name);
      console.log('Instance created!');
    }
    return MyService.instance;

  }
}


const myService1 = MyService.create('service1');
console.log(myService1.getName());

const myService2 = MyService.create('service2');
console.log(myService2.getName());


console.log(myService1 === myService2);
