export class Clock {
  constructor(hours = 0, minutes = 0) {
    this.minutes = minutes + hours * 60;
  }

  normalize() {
    let hours = Math.floor((this.minutes / 60) % 24);
    let minutes = Math.floor(this.minutes % 60);

    hours = hours >= 0 ? hours : (24 - (Math.abs(hours) % 24)) % 24;
    minutes = minutes >= 0 ? minutes : 60 - (Math.abs(minutes) % 60);

    return { hours, minutes };
  }

  toString() {
    return (
      String(this.normalize().hours).padStart(2, 0) +
      ":" +
      String(this.normalize().minutes).padStart(2, 0)
    );
  }

  plus(minutes) {
    this.minutes += minutes;

    return this;
  }

  minus(minutes) {
    this.minutes -= minutes;

    return this;
  }

  equals(clock) {
    return (
      this.normalize().hours === clock.normalize().hours &&
      this.normalize().minutes === clock.normalize().minutes
    );
  }
}
