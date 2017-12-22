/*
Complete the solution so that it reverses the string value passed into it.

solution('world'); // returns 'dlrow'

*/

function solution(str){
    var z = "";
    for (var x = str.length-1; x >= 0; x--) {
      z = z.concat(str.charAt(x));
    }
    return z;
  }