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

    for (var j = 1; j <= (height - i + 1); j++) {
      if (j == (height - i + 1)){
        row += "#"
      }
      else{
        row += " ";
      }
    }
    for (var k = 1; k <= i; k++) {
      row += "#";
      if (k == i){
        row += "  #";
        for (var z = 1; z <= k; z++){
          row += "#";
        }
      }
    }
    console.log(row);
  }
}
console.log();
createHalfPyramid(height);
console.log();
