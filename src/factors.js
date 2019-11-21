const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;

let flag = 0;
let positiveNumber = Number(readlineSync.question("\nPositive integer: "));
let factors = "\n";

while (positiveNumber > MAX || positiveNumber <= 0){
  positiveNumber = Number(readlineSync.question("Positive integer: "));
}

for (let x = 1; x <= positiveNumber/2; x++){
  remainder = positiveNumber % x;
  if(remainder == 0){
    if(factors.includes(", " + x + ", ") == true ){
      break;
    }
    else {
      if (positiveNumber / x == x){
        factors = factors + x + ".";
        flag = 1;
      }
      else {
          factors = factors + x + ", " + (positiveNumber / x) + ", ";
      }
    }
  }
}
if (flag != 1){
  badComma = factors.lastIndexOf(",");
  factors = factors.slice(1, badComma);
  factors = factors + ".";
}
console.log(factors + "\n");
