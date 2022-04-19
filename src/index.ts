import { superFactorial } from './SuperFactorial';
import { superFactorialDinamic } from './DinamicSuperFactorial';

const min = 100;
const max = 300;

const superFactorialStartTime = new Date().getTime();
for(let i = min; i <= max; i++) {
  superFactorial(i);
}
const superFactorialEndTime = new Date().getTime()

const dinamic = superFactorialDinamic();
const dynamicStartTime = new Date().getTime()
for(let i = 2; i <= 200; i++) {
  dinamic(i);
}
const dynamicEndTime = new Date().getTime()

console.log(`Time without cache: ${superFactorialEndTime - superFactorialStartTime} ms`);

console.log(`Time using cache: ${dynamicEndTime - dynamicStartTime} ms`);