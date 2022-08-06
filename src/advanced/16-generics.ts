import { Dog } from './09-protected';

/*export function getValue(value: number | string | string[]) {
  return value;
}
*/
//getValue(12).toFixed();


export function getValue<myType, myType2>(value: myType) {
  return value;
}

getValue(12).toFixed();
getValue('1').toLowerCase();
getValue<number, string>(12).toFixed();

const mydog = new Dog('fifi','julian');
getValue<Dog,Dog>(mydog).greeting();
