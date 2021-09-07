const compute = (dna1, dna2) => {
  if (dna1.length !== dna2.length) {
    if (dna1.length === 0) {
      throw new Error("left strand must not be empty");
    } else if (dna2.length === 0) {
      throw new Error("right strand must not be empty");
    } else {
      throw new Error("left and right strands must be of equal length");
    }
  }

  let hammingDistance = 0;

  for (let i = 0; i < dna1.length; i++) {
    if (dna1[i] !== dna2[i]) hammingDistance++;
  }

  return hammingDistance;
};

export { compute };
