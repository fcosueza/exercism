// Planet orbits periods in seconds (1 year =  31557600)
const planetsOrbitsPeriods = {
  earth: 31557600,
  mercury: 7600543.81992,
  venus: 19414149.052176,
  mars: 59354032.690079994,
  jupiter: 374355659.124,
  saturn: 929292362.8848,
  uranus: 2651370019.3296,
  neptune: 5200418560.032001
};

const age = (planet, age) =>
  Math.round((age / planetsOrbitsPeriods[planet]) * 100) / 100;

export { age };
