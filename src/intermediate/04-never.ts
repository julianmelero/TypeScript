// Functions that never terminate, eg, infinite loop

const infinity = () => {
  while(true) {
    console.log("Inf.");
  }
}

const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if (typeof input === "string") {
    return 'Is a string';
  }
  else if(Array.isArray(input)) {
    return 'Is an Array';
  }

  return fail('Not match');
}

console.log(example('Hello'));
console.log(example([1,1,1,1]));
console.log(example(1212)); // stop
console.log(example('After fail'));
