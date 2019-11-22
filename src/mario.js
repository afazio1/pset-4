const readlineSync = require("readline-sync");

const MAX = 24;
const MIN = 1;
let height = Number(readlineSync.question("\nHeight: "));

while (height > MAX || height < MIN){
  height = Number(readlineSync.question("Height: "));
}

function createHalfPyramid (height) {

  for (var i = 1; i <= height; i++) {
    var row = "";
    
    for (var j = 1; j <= (height - i); j++) {
      row += " ";
      if (j == (height - i)){
        row += "#"
      }
    }

    for (var k = 1; k <= i; k++) {
      row += "#";
      
    }
    if (i == height){
      row += "#";
    }
    console.log(row);
  }
}
console.log();
createHalfPyramid(height);
console.log();
