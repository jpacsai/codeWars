// Counting Duplicates

/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters 
and numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) 
and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (bandB)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

function duplicateCount(text){
    var str = text.toString().toLowerCase().split("").sort();
    var rep = [];
    for (i = 0 ; i < str.length; i++) {
      if (str[i] == str[i+1]) {
        if (rep.includes(str[i]) === false) {
            rep = rep.concat(str[i]);
        }
      }
    }
    return rep.length;
}