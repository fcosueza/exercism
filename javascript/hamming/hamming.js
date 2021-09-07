const compute = (dna1, dna2) => {
  if (dna1.length !== dna2.length)
    throw new Error("left and right strands must be of equal length");

  let hammingDistance = 0;

  for (let i = 0; i < dna1.length; i++) {
    if (dna1[i] !== dna2[i]) hammingDistance++;
  }

  return hammingDistance;
};

export default compute;
