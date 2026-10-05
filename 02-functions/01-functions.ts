function calculateTax(income: number) {
  return income * 0.2;
}

console.log(calculateTax(1000));

function greet(name: string): string {
  return `Hello ${name}`;
}

console.log(greet("Ahmed"));

function printMessage(message: string): void {
  console.log(message);
}

printMessage("Hello TypeScript");

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20));

function greetUser(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello ${name}, you are ${age} years old`;
  }

  return `Hello ${name}`;
}

console.log(greetUser("Ahmed"));
console.log(greetUser("Ahmed", 21));

function greetUser2(name: string, age: number = 18): string {
  return `Hello ${name}, you are ${age} years old`;
}

console.log(greetUser2("Ahmed"));
console.log(greetUser2("Ahmed", 21));

function createUser(
  name: string,
  age: number,
  isAdmin: boolean
): string {
  return `${name} is ${age} years old. Admin: ${isAdmin}`;
}

console.log(createUser("Ahmed", 21, false));
