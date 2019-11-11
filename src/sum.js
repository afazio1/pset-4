const readlineSync = require("readline-sync");

let lowerBound = Number(readlineSync.question("\nLower bound: "));
let upperBound = Number(readlineSync.question("Upper bound: "));
let sum = 0;
while (lowerBound > upperBound){
  lowerBound = Number(readlineSync.question("Lower bound: "));
  upperBound = Number(readlineSync.question("Upper bound: "));
}

if (lowerBound % 2 === 0){
  for (i = lowerBound; i <= upperBound; i+=2){
    sum = i + sum;
  }
}
else if (lowerBound % 2 !== 0){
  for (i = lowerBound + 1; i <= upperBound; i+=2){
    sum = i + sum;
  }
}
else {
  console.log("\nInvalid.")
}
sum = sum.toLocaleString("en");
console.log("\n" + sum + ".");
