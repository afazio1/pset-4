const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let positiveNum = Number(readlineSync.question("\nPositive integer: "));
let sum = 0;

while (positiveNum < MIN || Number.isNaN(positiveNum) == true || positiveNum > MAX || Number.isInteger(positiveNum) == false) {
  positiveNum = Number(readlineSync.question("Positive integer: "));
}

while (positiveNum > 0.1) {
  digit = positiveNum % 10;
  if (digit % 2 != 0) {
    sum = sum + digit
  }
  positiveNum = Math.floor(positiveNum / 10);

}
console.log("\n" + sum + ".\n")
