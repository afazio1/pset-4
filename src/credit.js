const readlineSync = require("readline-sync");

const MIN = 1000000000000;
const MAX = 10000000000000000;

let creditCardNumber = Number(readlineSync.question("\nNumber: "));
let sum = 0;
let times2;
let newStringOfNumbers = "";
let sumOfDigitsNotMultipliedByTwo = 0;

while (creditCardNumber < MIN || creditCardNumber >= MAX){
  creditCardNumber = Number(readlineSync.question("Number: "));
}
creditCardNumber = String(creditCardNumber);
let numberOfDigits = creditCardNumber.length;

//performs calculations
for (let i = numberOfDigits - 2; i >= 0; i -= 2) {
  digit = creditCardNumber.charAt(i);
  digit = Number(digit);
  times2 = digit * 2;
  times2 = String(times2);
  newStringOfNumbers = newStringOfNumbers + times2;
}

for (let k = newStringOfNumbers.length + 1; k >= 0; k--) {
  digit = newStringOfNumbers.charAt(k);
  digit = Number(digit);
  sum = sum + digit;

}
for (let j = numberOfDigits + 1; j >= 0; j -= 2){
  digit = creditCardNumber.charAt(j);
  digit = Number(digit);
  sumOfDigitsNotMultipliedByTwo = sumOfDigitsNotMultipliedByTwo + digit;
}

checkSum = sum + sumOfDigitsNotMultipliedByTwo;
checkSum = String(checkSum);

//check if the card number is valid
let valid = (checkSum.endsWith("0") == true) ? true : false;

//determine which card it is
if (valid == true){

  if (numberOfDigits == 15 && creditCardNumber.startsWith("34") == true || creditCardNumber.startsWith("37") == true){
    console.log("\nAmex.\n");
  }
  else if (numberOfDigits == 13 || numberOfDigits == 16 && creditCardNumber.startsWith("4") == true){
    console.log("\nVisa.\n");
  }
  else {
    console.log("\nMastercard.\n");
  }
}
else {
  console.log("\nInvalid.\n");
}
