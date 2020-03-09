export const primeFactors = n => {
  let factors = [];

  for (let div = 2; n > 1; div++)
    while (n % div === 0) {
      factors.push(div);
      n = n / div;
    }

  return factors;
};
