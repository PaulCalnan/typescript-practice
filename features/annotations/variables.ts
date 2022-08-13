let apples: number = 5; // 'type ANNOTATION'using let for examples
let apple = 5; // initialised variable 'type INFERENCE' when all within one line (hover to see)
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {

}
let car: Car = new Car();

// Object literal (with type annotation on an object)
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function -> TYPE ANNOTATION PART -> 
// : (i: number) => void -> 
// THEN THE ACTUAL FUNCTION AND ARGUMENTS COME AFTER THE TYPE ANNOTATION
// VOID is used where you could declare annotation types on function expected return values (VOID for nothing returned)
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations..
// 1. Functions that return an 'any' type
const json = '{"x":10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
// without the annotation, gives type 'any' because it is unknown what JSON.parse might return
// adding : { x: number; y: number } after coordinates is the correct way to annotate
console.log(coordinates); // {x: 10, y: 20}

// 2. When we declare a variable on one line
// and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord;
// avoiding 'any' type, follow on from tip hovering above would be to have either...
// let foundWord: boolean;
// let foundWord = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3. Variable whose type can not be inferred correctly
// bad example but here we need a way to initialize as boolean then change variable type to a number
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}