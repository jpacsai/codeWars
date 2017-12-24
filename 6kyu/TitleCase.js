/*
A string is considered to be in title case if each word in the string is either 
(a) capitalised (that is, only the first letter of the word is in upper case) or 
(b) considered to be an exception and put entirely into lower case unless it is the first word, 
which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions 
(minor words). The list of minor words will be given as a string with each word separated by a space.
Your function should ignore the case of the minor words string -- it should behave in the same way 
even if the case of the minor word string is changed.

*/

function titleCase(title, minorWords) {
  var titleStr = title.split(" ");
    for (var a = 0; a < titleStr.length; a++) {
      titleStr[a] = titleStr[a].toLowerCase();
    }
  
  var minorStr = minorWords.split(" ");
    for (var b = 0; b < minorStr.length; b++) {
      minorStr[b] = minorStr[b].toLowerCase();
    }
  
  var newStr = titleStr[0].charAt(0).toUpperCase().concat(titleStr[0].slice(1));
  
    for (var x = 1 ; x < titleStr.length; x++) {
      if (minorStr.includes(titleStr[x])) {
        newStr = newStr.concat(" ",titleStr[x]);
      }
      else {
        newStr = newStr.concat(" ",titleStr[x].charAt(0).toUpperCase().concat(titleStr[x].slice(1)));
      }
    }
    return newStr; 
}
