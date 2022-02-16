const transform = oldSystem => {
  let newSystem = {};

  for (let score in oldSystem) {
    oldSystem[score].forEach(letter => (newSystem[letter.toLowerCase()] = Number(score)));
  }

  return newSystem;
};

export { transform };
