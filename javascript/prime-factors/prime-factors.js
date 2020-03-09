export const primeFactors = n => {
  let factors = [];

  for (let i = 2; n > 1; i++)
    while (n % i === 0) {
      factors.push(i);
      n = n / i;
    }

  return factors;
};
