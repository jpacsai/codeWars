/*


*/

function titleCase(title, minorWords) {
    var titleStr = title.split(" ");
    var minorStr = minorWords.split(" ");
    var first = titleStr[0].charAt(0).toUpperCase().concat(titleStr[0].slice(1));
    var newStr = first;
    var a = titleStr.length;
    for (var x = 1; x <= a; x++) {
      var b = titleStr[x].length;
      for (var y = 0; y <= b; y++) {
        if (titleStr[x] == minorStr[y]) {
          newStr.concat(" ", minorStr[y]);
        }
        else {
          newStr.concat(" ", titleStr[0].charAt(0).toUpperCase().concat(titleStr[0].slice(1)));
        }
      }
    }
    return newStr;
  }
  
  titleCase('a clash of KINGS', 'a an the of');
  
  console.log(titleCase);
  
  /*
  var titleStr = ["a","clash","of","KINGS"];
    var minorStr = ["a","an","the","of"];
    var newStr = "A";
    var a = 4;
    for (var x = 1; x <= a; x++) {
      var b = titleStr[x].length;
      for (var y = 0; y <= b; y++) {
        if (titleStr[x] == minorWords[y]) {
          newStr.concat(" ", minorWords[y]);
        }
        else {
          newStr.concat(" ", titleStr[0].charAt(0).toUpperCase().concat(titleStr[0].slice(1)));
        }
      }
    }
  
  */