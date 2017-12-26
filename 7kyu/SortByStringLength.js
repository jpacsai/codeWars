// Sort array by string length

/*
Write a function that takes an array of strings as an argument and returns a sorted array 
containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, 
so you will not have to decide how to order multiple strings of the same length.

*/


// with .sort() method
function sortByLength (array) {
    var newArray = array.sort(function(a,b) {
        return a.length - b.length;
    });
    return newArray;
}


// without .sort() method
function sortByLength (array) {
    var newArr = [array[0]];
    
    for (var a = 1; a < array.length; a++) {
      var b = newArr.length;
      for (var c = 0; c < b; c++){
          if (array[a].length < newArr[c].length) {
            newArr.splice(c,0,array[a]);
            b = c;
          }
          else {
            newArr.splice(c+1,0,array[a]);
            b = c;
          }
      }
    }
    return newArr;
  }

