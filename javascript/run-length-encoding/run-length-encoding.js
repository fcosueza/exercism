const encode = string => {
  if (string === "") return "";

  const regex = /(.)\1*/g;

  return string
    .match(regex)
    .map(el => (el.length < 2 ? el.charAt(0) : el.length.toString() + el.charAt(0)))
    .join("");
};

const decode = string => {
  if (string === "") return "";
};

export { encode, decode };
