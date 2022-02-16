/* Test if a year introduced is a leap year or not */

let isLeap = year => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)

export { isLeap };
