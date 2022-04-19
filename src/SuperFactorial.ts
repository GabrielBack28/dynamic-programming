const factorial = (n: number): number => {
  let result = 1;

  if (n === 0) return 1;

  for (let current = 1; current <= n; current++) {
    result *= current;
  }

  return result;
};

export const superFactorial = (n: number): number => {
  let result = 1;

  for (let current = 1; current <= n; current++) {
    result *= factorial(current);
  }

  return result;
};