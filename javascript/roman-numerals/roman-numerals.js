const ROMAN = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1]
];

const toRoman = number => {
  if (!Number.isInteger(number) || number < 0 || number > 3000) return "";

  return ROMAN.reduce((acc, curr) => {
      const [result, next] = acc;
      const [letter, value] = curr;

      return [result + letter.repeat(next / value), next % value];
    }, ["", number])[0];
};

export { toRoman };
