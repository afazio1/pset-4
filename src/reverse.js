const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let positiveNum = Number(readlineSync.question("\nPositive integer: "));
let reverse = "";
let digit;

while (positiveNum < MIN || Number.isNaN(positiveNum) == true || positiveNum > MAX || Number.isInteger(positiveNum) == false) {
  positiveNum = Number(readlineSync.question("Positive integer: "));
}

while (positiveNum > 0.1) {
  digit = positiveNum % 10;
  positiveNum = Math.floor(positiveNum / 10);
  if (positiveNum >= 1) {
    reverse = reverse + digit + ", ";
  }
  else {
    reverse = reverse + digit + ".\n";
  }
}
console.log("\n" + reverse);
