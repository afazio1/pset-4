const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let nonNegativeNumber = Number(readlineSync.question("\nNon-negative number: "));
let flag = 0;

for (let x = 2; x <= nonNegativeNumber/2; x++){
  nonNegativeNumber = nonNegativeNumber % x;
  if(nonNegativeNumber == 0){
    console.log("\nNot Prime.");
    flag = 1;
  }
}
if (flag == 0){
  console.log("\nPrime.");
}
