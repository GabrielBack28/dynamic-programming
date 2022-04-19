export const superFactorialDinamic = () => {
  const cache: {
    [key: number]: number
  } = {};

  return (N: number) => {
    const calculate = (n: number): number => {
      if (n === 0) {
        return 1;
      }
      if (cache[n]) {
        return cache[n];
      }

      const result = n * calculate(n - 1);

      cache[n] = result;

      return result;
    }

    let result = 1;

    for (let current = 1; current <= N; current++) {
      result *= calculate(current);
    }

    return result;
  }
};