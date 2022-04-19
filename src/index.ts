import { superFactorial } from './SuperFactorial';
import { superFactorialDinamic } from './DinamicSuperFactorial';
import { File, Data } from './file';

const min = 100;
const max = 300;

const data: Data = {
  superFactorial: [],
  dinamic: []
};

for(let interations = 0; interations < 100; interations++) {
  const superFactorialStartTime = new Date().getTime();
  for(let i = min; i <= max; i++) {
    superFactorial(i);
  }
  const superFactorialEndTime = new Date().getTime();
  
  const dinamic = superFactorialDinamic();
  const dynamicStartTime = new Date().getTime();
  for(let i = 2; i <= 200; i++) {
    dinamic(i);
  }
  const dynamicEndTime = new Date().getTime();

  data.superFactorial.push(superFactorialEndTime - superFactorialStartTime);
  data.dinamic.push(dynamicEndTime - dynamicStartTime);
}

const file = new File();

file.write(data);
