// Advanced Pig Latin

/*
Pig latin is created by taking all the consonants before the first vowel of a word and moving them to the back of the word followed by the letters "ay".

"hello" => "ellohay"
"creating" => "eatingcray"
If the first letter of the word is a vowel, the string is left the same and the letters "way" are appended to the end.

"algorithm" => "algorithmway"
This problem is different from other variations in that it expects casing to remain the same so:

"Hello World" => "Ellohay Orldway"
as well as punctuation.

"Pizza? Yes please!" => "Izzapay? Esyay easeplay!"
Your job is to take a string and translate it to Pig Latin. The string will never be undefined but may contain both numbers and letters. A word will never be a combination of numbers and letters. Also, there will never be punctuation at the beginning of a word and the only capital letter in a word will be the first letter meaning there are zero all capitalized words.

*/

function translate(sentence) {
    const arr = sentence.split(/(' '|\W)/).filter(c => c != '');
    
    // get index of uppercase letters
    const upper = arr.reduce((total, currentValue, index) => {
      if ((/[A-Z]/).test(currentValue[0]) === true) {
        total.push(index);
      }
      return total;
    }, []);
    
    // transform strings
    const remapped = arr.map((word, index) => {
      if ((/[A-z]/).test(word[0]) === true) {
        // if first letter vowel
        if ((/(a|e|i|o|u)/i).test(word.slice(0, 1)) === true) {
          return word + 'way';
        }
        // if first letter not a vowel
        else {
          const w = word.toLowerCase();
          const firstVowel = w.search(/(a|e|i|o|u)/);
          const swapped = w.slice(firstVowel) + w.slice(0, firstVowel);
          return (upper.includes(index) === true ? swapped.slice(0,1).toUpperCase() + swapped.substr(1) : swapped) + 'ay';
        }
      }
      return word;
    })
    return remapped.join('');
};