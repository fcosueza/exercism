const encode = string => {
  if (string === "") return "";

  const regex = /(.)\1*/g;

  return string
    .match(regex)
    .map(elem => elem.length < 2 ? elem.charAt(0) : elem.length.toString() + elem.charAt(0))
    .join("");
};

const decode = string => {
  if (string === "") return "";

  const termRegex = /\d+\D|\D/g;
  const numsRegex = /\d+/g;
  const charRegex = /\D/g;

  return string
    .match(termRegex)
    .map(elem => {
      let num = parseInt(elem.match(numsRegex));

      return num ? new Array(num).fill(elem.match(charRegex)).join("") : elem;
    })
    .join("");
};

export { encode, decode };
