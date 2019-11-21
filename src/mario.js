const readlineSync = require("readline-sync");

const MAX = 24;
const MIN = 1;
let height = Number(readlineSync.question("\nHeight: "));

while (height > MAX || height < MIN){
  height = Number(readlineSync.question("\nHeight: "));
}

function createHalfPyramid (height) {

  for (var i = 1; i <= height; i++) {
    var row = '';

    for (var j = 1; j <= (height - i); j++) {
      row += ' ';
    }

    for (var k = 1; k <= i; k++) {
      row += '#';
    }

    console.log(row);
  }
}

console.log(createHalfPyramid(height));







/*
while (z > 0) {

let i = height - 1;
let x = 2;

while (i > 0) {
  line = line + " ";
  i--;
}

while (x > 0){
  hashes = hashes + "#";
  x--;
  }

  line = "\n" + line + hashes;
  console.log(line + "\n");
  z--;
}
*/
