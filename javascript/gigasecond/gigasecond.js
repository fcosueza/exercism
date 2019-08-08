const giga_sec = 1000000000;

const gigasecond = date =>
  new Date(date.setSeconds(date.getSeconds() + giga_sec));

export { gigasecond };
