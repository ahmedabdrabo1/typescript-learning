let calculate: (a: number, b: number) => number;

calculate = (a, b) => {
  return a + b;
};

console.log(calculate(10, 20));


const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(10, 20));


const multiply = (a: number, b: number): number => a * b;

console.log(multiply(5, 4));


const greet = (name: string, age?: number): string => {
  if (age !== undefined) {
    return `Hello ${name}, you are ${age} years old`;
  }

  return `Hello ${name}`;
};

console.log(greet("Ahmed"));
console.log(greet("Ahmed", 21));


function processNumber(
  number: number,
  callback: (value: number) => number
): number {
  return callback(number);
}

const double = (value: number): number => value * 2;

console.log(processNumber(10, double));


console.log(
  processNumber(10, (value) => value * 2)
);


type Handler = (
  name: string
) => string;

const handler: Handler = (name) => {
  return `Hello ${name}`;
};

console.log(handler("Ahmed"));
