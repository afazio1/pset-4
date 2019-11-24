const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

let nonNegativeNum;
let average = 0;
let sum = 0;
let divisor = 0;
let indent = "\n";

do {
 nonNegativeNum = Number(readlineSync.question(indent + "Non-negative integer: "));
 indent = "";
 if (Number.isNaN(nonNegativeNum) !== true){
   sum = sum + nonNegativeNum;
   divisor += 1;
 }
}
while (nonNegativeNum < MAX && nonNegativeNum >= MIN || Number.isNaN(nonNegativeNum) == true)

sum = sum - nonNegativeNum;
divisor -= 1;
average = sum / divisor;
average = average.toLocaleString("en", {maximumFractionDigits: 3, minimumFractionDigits: 3});
console.log("\n" + average + ".\n")
