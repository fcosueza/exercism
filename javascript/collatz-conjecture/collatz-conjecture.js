const steps = (number, count = 0) => {
  if (number <= 0) throw Error("Only positive numbers are allowed");

  // If the number is valid, call the function recursively
  if (number === 1) {
    return count;
  } else {
    return number % 2 === 0
      ? steps(number / 2, count + 1)
      : steps(3 * number + 1, count + 1);
  }
};

export { steps };
