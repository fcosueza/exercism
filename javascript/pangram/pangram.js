const isPangram = string => {
  if (!string) return false;

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return [...alphabet].every(letter => 
    string.toLowerCase().includes(letter));
};

export { isPangram };
