export function solve(x, y) {
  let radius = Math.sqrt(x * x + y * y); // Pythagorean theorem

  let points = 0;

  if (radius <= 1) {
    points = 10;
  } else if (radius <= 5) {
    points = 5;
  } else if (radius <= 10) {
    points = 1;
  }

  return points;
}
