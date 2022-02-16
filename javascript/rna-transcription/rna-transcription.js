/* This code transcribe a DNA secuence to it corresponding RNA sequence */

const pairsDNA = {
  C: "G",
  G: "C",
  T: "A",
  A: "U"
};

// prettier-ignore

const toRna = dna => 
  dna.split("").map(item => pairsDNA[item]).join("");

export { toRna };
