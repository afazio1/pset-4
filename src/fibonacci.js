const readlineSync = require("readline-sync");
const MAX = 78;
const MIN = 1;
const PHI = (Math.sqrt(5) + 1) / 2
const INVERSE_PHI = (Math.sqrt(5) - 1) / 2

let nth_term = 0;
let n = Number(readlineSync.question("\nPositive integer: "));

while (n < MIN || n > MAX || Number.isInteger(n) == false || Number.isNaN(n) == true) {
  n = Number(readlineSync.question("Positive integer: "));
}

nth_term = Math.ceil((Math.pow(PHI, n) - (Math.pow((INVERSE_PHI * -1), n))) / Math.sqrt(5));
nth_term = nth_term.toLocaleString("en", {maximumFractionDigits: 0, minimumFractionDigits: 0});
console.log("\n" + nth_term + ".\n");
