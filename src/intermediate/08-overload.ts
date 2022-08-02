// function params: 'Julian' => return [J,u,l,i,a,n]
// function params: [J,u,l,i,a,n] => Julian => string[] => string

function parseStr(input: string | string[]): string | string[] {
  if(Array.isArray(input)) {
    return input.join(''); // return string
  }
  else {
    return input.split(''); // return string[]
  }
}

const rtaArray = parseStr('Julian');
if(Array.isArray(rtaArray)) {
  console.log(rtaArray.reverse());
}

const rtaStr = parseStr(['J','u','l','i','a','n']);
console.log(rtaStr);
