const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
};

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // void to say there will be no return value from the function
  // can still return null or underfined
};

const throwError = (message: string): never => {
  throw new Error(message);
  // never can be used if the function is never expected tho return anything at all
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

// destructuring forecast into logWeather...
// replace (forecast: { date: Date, weather: string}): void with...
// ({date, weather}: { date: Date, weather: string}): void
// that way the console.log(forecast.date) can become...
// console.log(date) as follows...
// note destructuring and annotation types are still two seperate parts
const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);