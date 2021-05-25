class Clock {
  constructor(hours = 0, minutes = 0) {
    this.minutes = minutes + hours * 60;
  }

  getMinutes() {
    return this.minutes;
  }

  toString() {
    return (
      String(Math.floor(this.minutes / 60) % 24).padStart(2, 0) +
      ":" +
      String(Math.floor(this.minutes % 60)).padStart(2, 0)
    );
  }

  plus(minutes) {
    this.minutes += minutes;
  }

  minus(minutes) {
    this.minutes -= minutes;
  }

  equals(clock) {
    return this.minutes === clock.getMinutes();
  }
}

export { Clock };
