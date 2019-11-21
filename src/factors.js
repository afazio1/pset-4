const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;

let flag = 0;
let positiveNumber = Number(readlineSync.question("\nPositive integer: "));
let factors = "\n";

if (positiveNumber == 1){
  console.log("\n1.");
  flag = 2;
}
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
if (flag == 0){
  badComma = factors.lastIndexOf(",");
  factors = factors.slice(1, badComma);
  factors = factors + ".";
}
else if (flag == 1){
console.log(factors + "\n");
}
