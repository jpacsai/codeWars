/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. 
Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) 
where you will return Nothing (None).

#Example:

s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", 
      "znnnnfqknaz", "qqquuhii", "dvvvwz"]
s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]

mxdiflg(s1, s2) --> 13

Bash note:
input : 2 strings with substrings separated by ,

output: number as a string

*/

function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) {
      return -1;
    }
    
    var max1 = 0;
      for (var a = 0; a < a1.length; a++) {
        if (a1[a].length > max1) {
          max1 = a1[a].length;
        }
      }
    
    var min1 = max1;
      for (var c = 0; c < a1.length; c++) {
        if (a1[c].length < min1) {
          min1 = a1[c].length;
        }
      }
    
    var max2 = 0;
      for (var b = 0; b < a2.length; b++) {
        if (a2[b].length > max2) {
          max2 = a2[b].length;
        }
      }
    
    var min2 = max2;
      for (var d = 0; d < a2.length; d++) {
        if (a2[d].length < min2) {
          min2 = a2[d].length;
        }
      }
    
    if (max1 - min2 > max2 - min1) {
      return max1 - min2;
    }
    else {
      return max2 - min1;
    }  
  }
  