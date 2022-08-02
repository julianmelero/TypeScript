// function params: 'Julian' => return [J,u,l,i,a,n]
// function params: [J,u,l,i,a,n] => Julian => string[] => string

// overwriting function
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;


/*export function parseStr(input: string | string[]): string | string[] {
  if(Array.isArray(input)) {
    return input.join(''); // return string
  }
  else {
    return input.split(''); // return string[]
  }
}
*/

export function parseStr(input: unknown):unknown {
  if(Array.isArray(input)) {
    return input.join(''); // return string
  }
  else if(typeof input === "string") {
    return input.split(''); // return string[]
  }
}

const rtaArray = parseStr('Julian');
console.log(rtaArray.reverse());

const rtaStr = parseStr(['J','u','l','i','a','n']);
console.log(rtaStr);
