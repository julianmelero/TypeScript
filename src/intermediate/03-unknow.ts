// We can use unknow like any, but it has more flexibility and has static analysis

let unknowVar: unknown = ':D';

if(typeof unknowVar === 'string') {
  unknowVar.toUpperCase();
}

if(typeof unknowVar === 'boolean') {
  let isNew: boolean = unknowVar;
}

const parse = (str: string):unknown => {
  return JSON.parse(str);
};
