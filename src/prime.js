const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;
let flag = 0;

let nonNegativeNumber = Number(readlineSync.question("\nNon-negative integer: "));

while (nonNegativeNumber > MAX || nonNegativeNumber <= MIN || Number.isInteger(nonNegativeNumber) == false || Number.isNaN(nonNegativeNumber) == true) {
  nonNegativeNumber = Number(readlineSync.question("Non-negative integer: "));
}
if (nonNegativeNumber === 1) {
  console.log("\nNot Prime.\n");
  flag = 1;
}
for (let x = 2; x <= nonNegativeNumber/2; x++) {
  remainder = nonNegativeNumber % x;
  if (remainder == 0) {
    console.log("\nNot Prime.\n");
    flag = 1;
    break;
  }
}
if (flag == 0) {
  console.log("\nPrime.\n");
}
