const encode = string =>
  string.replace(
    /(.)\1*/g,
    (match, p1) => `${match.length === 1 ? "" : match.length}${p1}`
  );

const decode = string =>
  string.replace(/(\d+)(\D)/g, (_, p1, p2) => p2.repeat(p1));

export { encode, decode };
