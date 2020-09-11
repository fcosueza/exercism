const steps = (number, count = 0) => {
  if (number <= 0) throw Error("Only positive numbers are allowed");

  if (number === 1) return count;

  return steps(calculateNextStep(number), count + 1);
};

const calculateNextStep = number => {
  if (number % 2 === 0) {
    return number / 2;
  } else {
    return 3 * number + 1;
  }
};

export { steps };
