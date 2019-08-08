const pairsDNA = {
  C: "G",
  G: "C",
  T: "A",
  A: "U"
};

const toRna = dna =>
  dna
    .split("")
    .map(item => pairsDNA[item])
    .join("");

export { toRna };
