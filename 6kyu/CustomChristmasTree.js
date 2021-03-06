// Custom Christmas Tree

/*
Christmas is coming, and your task is to build a custom Christmas tree with the specified characters and the specified height.

Inputs:
chars: the specified characters.
n: the specified height. A positive integer greater than 2.
Output:
A multiline string. Each line is separated by \n. A tree contains two parts: leaves and trunks.
The leaves should be n rows. The first row fill in 1 char, the second row fill in 3 chars, and so on. A single space will be added between two adjust chars, and some of the necessary spaces will be added to the left side, to keep the shape of the tree. No space need to be added to the right side.

The trunk should be at least 1 unit height, it depends on the value of the n. The minimum value of n is 3, and the height of the tree trunk is 1 unit height. If n increased by 3, and the tree trunk increased by 1 unit. For example, when n is 3,4 or 5, trunk should be 1 row; when n is 6,7 or 8, trunk should be 2 row; and so on.

Still not understand the task? Look at the following example ;-)

Examples
For chars = "*@o" and n = 3,the output should be:

  *
 @ o
* @ o
  |

*/

/*
function customChristmasTree(chars,n){
  var charPointer = 0
  var trunkLength = Math.floor(n/3)
  var trunkString = (" ".repeat(n-1)+"|\n").repeat(trunkLength-1) + " ".repeat(n-1)+ "|"
  var christmasTree = ""
  for (i = n; i>0 ; i--){
    var line = " ".repeat(i-1)+ chars[(charPointer++)%(chars.length)]
    var j = i
    while (n-j>0){
     line += " "+chars[(charPointer++)%(chars.length)]
     j++
    }
    line += "\n"
    christmasTree += line
  }
  return christmasTree + trunkString
}
*/

function customChristmasTree(chars,n){
  let tree = "";
  let decor = chars.repeat(Math.ceil((n * (n + 1) / 2) / chars.length)) + chars.slice(0, (n * (n + 1) / 2) % chars.length);
  const trunk = Math.floor((n - 3) / 3 + 1);
  for (let i = 0; i < (n + trunk); i++) {
    if (i < n) {
      tree += (" ").repeat(n - i - 1) + decor.slice(0, i + 1).split("").join(" ") + "\n";
      decor = decor.slice(i + 1);
    }
    else {
      tree += (" ").repeat(n - 1) + "|" + "\n";
    }
  }
  return (" ").repeat(n - 1) + tree.trim();
}