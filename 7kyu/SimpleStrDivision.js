// Simple string division

/*
In this Kata, you will be given a number in form of a string and an integer k and your task is to insert k commas into the string and determine which of the partitions is the largest.

For example:
solve('123',1) = 23 because we insert one comma and get the substrings ('1','23') or ('12',3). The max of these is '23'.
solve('1234',1) = 234 because ('1','234') or ('12','34') or ('123','4').
solve('1234',2) = 34 because ('1','2','34') or ('1','23','4') or ('12','3','4'). 
solve('1234',3) = 4.

*/

function solve(str,k){
    let max = 0;
    const start = str.substring(0, k + 1).split('').map(n => Number(n));
    const maxStartDigit = String(Math.max(...start));
    for (let i = 0; i <= k; i++) {
      if (str.charAt(i) === maxStartDigit) {
        const num = Number(str.substr(i,str.length - k));
        max = num > max ? num : max;
      }
    }
    return max;
}