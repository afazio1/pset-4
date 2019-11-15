const readlineSync = require("readline-sync");

let lowerBound = Number(readlineSync.question("\nLower bound: "));
let upperBound = Number(readlineSync.question("Upper bound: "));
let sum = 0;

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

while (lowerBound > upperBound || Number.isNaN(lowerBound) || Number.isNaN(upperBound) || lowerBound < MIN || upperBound > MAX){
  lowerBound = Number(readlineSync.question("Lower bound: "));
  upperBound = Number(readlineSync.question("Upper bound: "));
}

if (lowerBound % 2 === 0){
  for (i = lowerBound; i <= upperBound; i+=2){
    sum = i + sum;
  }
}
else {
  for (i = lowerBound + 1; i <= upperBound; i+=2){
    sum = i + sum;
  }
}

sum = sum.toLocaleString("en");
console.log("\n" + sum + ".");
