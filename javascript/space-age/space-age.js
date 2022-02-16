// Earth orbital period expressed in seconds (1 year = 31557600 seconds)
const earthOrbitPeriod = 31557600;

// Planets orbital periods expressed in Earth years
const planetsOrbitPeriod = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};

// Function age
const age = (planet, age, precision = 2) =>
  Number(((age / earthOrbitPeriod) / planetsOrbitPeriod[planet]).toFixed(precision));

export { age };
