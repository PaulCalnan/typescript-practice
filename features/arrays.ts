const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
// hovering over above 'type inference' annotates as : Date[]

const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// type annotaion helps with inference when extracting values, eg...
// expects car to be a string value
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values, eg...
carMakers.push(100);

// Help with 'map' for example... 
// below provides autocomplete on various methods available to string type annotation
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types with the OR pipe
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());

// Where to use typed arrays??
// Any time we need to represent a collection of records with some arbitrary sort order