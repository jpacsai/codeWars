// Convert string to camel case

/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

*/

function toCamelCase(str){
    return str.split(/_|-/).map((word, index) => 
      index === 0 ? word : word.charAt(0).toUpperCase() + word.substring(1)).join('');
  }