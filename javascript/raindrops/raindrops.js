const sound = {
  3: "Pling",
  5: "Plang",
  7: "Plong"
};

const convert = number => {
  let result = "";

  if (number % 3 === 0) result += sound[3];
  if (number % 5 === 0) result += sound[5];
  if (number % 7 === 0) result += sound[7];

  if (!result) result = number.toString();

  return result;
};

export { convert };
