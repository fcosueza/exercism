class Triangle {
  constructor(...sides) {
    this.sides = sides.sort((a, b) => a - b);
  }

  isValid() {
    return !(
      this.sides[0] <= 0 || this.sides[0] + this.sides[1] < this.sides[2]
    );
  }

  kind() {
    if (!this.isValid()) {
      throw Error("Invalid triangle !!");
    }

    let tempSet = new Set(this.sides);

    if (tempSet.size === 1) {
      return "equilateral";
    } else if (tempSet.size === 2) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }
}

export { Triangle };
