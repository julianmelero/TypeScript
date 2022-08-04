// Use abstract in parent class when you don't want create class from parent class directly

import { Animal,Dog } from './09-protected';

//const animal = new Animal('Best');
//animal.greeting();

const cheis = new Dog('Best', 'julian');
cheis.greeting();
cheis.woof(2);
