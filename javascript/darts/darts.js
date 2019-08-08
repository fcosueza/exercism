export function solve(x, y) {
  let radius = Math.sqrt(x * x + y * y); // Pythagorean theorem

  return radius <= 1 ? 10 : radius <= 5 ? 5 : radius <= 10 ? 1 : 0;
}
