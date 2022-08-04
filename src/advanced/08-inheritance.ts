export class Animal {
  constructor(
    public name: string
  ) {}

  move() {
    console.log("Moving!");
  }

  greeting() {
    return `Hello, I'm ${this.name}`
  }
}

const myAnimal = new Animal('Fifi');
myAnimal.move();
console.log(myAnimal.greeting());


export class Dog extends Animal {

  constructor(
    name: string,
    public owner:string)
    {
      super(name);
    }

  woof(times:number) {
    for (let index = 0; index <= times; index++) {
      console.log('woof');
    }
  }

}

const dog = new Dog('Doggg','Julian');
dog.woof(5);
