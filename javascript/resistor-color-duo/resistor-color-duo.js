/*
 * Convert two colors in the corresponding resistance value
 */

const RESISTANCE = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
};

let value = colors =>
  parseInt(colors.map(color => RESISTANCE[color]).join(''));

export { value };
