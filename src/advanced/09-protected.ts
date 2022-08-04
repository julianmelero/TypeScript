export abstract class Animal {
  constructor(
    protected name: string
  ) {}

  move() {
    console.log("Moving!");
  }

  greeting() {
    return `Hello, I'm ${this.name}`
  }

  protected doSomething() {
    console.log('do!');
  }
}

//const myAnimal = new Animal('Fifi');
//myAnimal.move();
//console.log(myAnimal.greeting());


export class Dog extends Animal {

  constructor(
    name: string,
    public owner:string)
    {
      super(name);
    }

  woof(times:number):void {
    for (let index = 0; index <= times; index++) {
      console.log('woof');
    }
  }

  move() {
    console.log('Moving as a dog');
    super.move(); // Here call move from parent
  }

}

//const animal = new Animal('Dogg One');
const dog = new Dog('Doggg','Julian');
dog.woof(5);
dog.move();
