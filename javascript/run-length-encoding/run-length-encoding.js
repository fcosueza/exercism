const encode = string => {
  if (string === "") return "";

  const regex = /(.)\1*/g;

  return string
    .match(regex)
    .map(el => (el.length < 2 ? el[0] : el.length.toString() + el[0]))
    .join("");
};

const decode = string => {
  if (string === "") return "";

  const outerRegex = /\D|\d+\D/g;
  const innerRegex = /\d+/g;

  return string.match(outerRegex);
};

export { encode, decode };
