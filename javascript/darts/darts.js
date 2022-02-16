
/*
 * This function calculate the distance from the given point (x, y) to the
 * center of the target and return the assigned points for that distance.
 */

export function solve(x, y) {
  let radius = Math.sqrt((x * x) + (y * y)); // Pythagorean theorem

  return (radius <= 1) ? 10 : (radius <= 5) ? 5 : (radius <= 10) ? 1 : 0;
}
