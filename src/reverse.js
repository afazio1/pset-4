const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let positiveNum = Number(readlineSync.question("\nPositive integer: "));
let digit;
let divisor = 10;

while (positiveNum < 0 || Number.isNaN(positiveNum) || positiveNum > MAX ) {
  positiveNum = Number(readlineSync.question("\nPositive integer: "));

}
for (i = 0, digit = 0; digit > 1; i < positiveNum; i++, divisor ** i){
digit = positiveNum % divisor;
console.log(digit);

}
