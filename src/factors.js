const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = 1;
let flag = 0;
let positiveNumber = Number(readlineSync.question("\nPositive integer: "));
let factors = "\n";

if (positiveNumber == 1) {
  console.log("\n1.\n");
  flag = 2;
}
while (positiveNumber > MAX || positiveNumber < MIN || Number.isInteger(positiveNumber) == false || Number.isNaN(positiveNumber) == true) {
  positiveNumber = Number(readlineSync.question("Positive integer: "));
}

for (let x = 1; x <= positiveNumber/2; x++) {
  remainder = positiveNumber % x;
  if (remainder == 0) {
    if (factors.includes(", " + x + ", ") == true) {
      break;
    }
    else {
      if (positiveNumber / x == x) {
        factors = factors + x + ".";
        flag = 1;
      }
      else {
          factors = factors + x + ", " + (positiveNumber / x) + ", ";
      }
    }
  }
}

if (flag == 0) {
  badComma = factors.lastIndexOf(",");
  factors = factors.slice(1, badComma);
  factors = factors + ".";
  console.log("\n" + factors + "\n");
}
else if (flag == 1) {
console.log(factors + "\n");
}
