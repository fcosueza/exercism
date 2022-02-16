/*
 * Program that receives a date and return this date plus 1 gigasecond.
 */

const giga_sec = 1000000000;

const gigasecond = date =>
  new Date(date.setSeconds(date.getSeconds() + giga_sec));

export { gigasecond };
