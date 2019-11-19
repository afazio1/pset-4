const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let positiveNum = Number(readlineSync.question("\nPositive integer: "));
let sum = 0;

while (positiveNum < 0 || Number.isNaN(positiveNum) || positiveNum > MAX || positiveNum < 1) {
  positiveNum = Number(readlineSync.question("Positive integer: "));
}

while (positiveNum > 0.1){
  digit = positiveNum % 10;
  if (digit % 2 != 0){
    sum = sum + digit
  }
  positiveNum = Math.floor(positiveNum / 10);

}
console.log("\n" + sum + ".\n")
