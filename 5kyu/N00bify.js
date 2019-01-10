// N00bify - English to n00b Translator

/*
The internet is a very confounding place for some adults. Tom has just joined an online forum and is trying to fit in with all the teens and tweens. It seems like they're speaking in another language! Help Tom fit in by translating his well-formatted English into n00b language.

The following rules should be observed:

- "to" and "too" should be replaced by the number 2, even if they are only part of a word (E.g. today = 2day)
- Likewise, "for" and "fore" should be replaced by the number 4
- Any remaining double o's should be replaced with zeros (E.g. noob = n00b)
- "be", "are", "you", "please", "people", "really", "have", and "know" should be changed to "b", "r", "u", "plz", "ppl", "rly", "haz", and "no" respectively (even if they are only part of the word)
- When replacing words, always maintain case of the first letter unless another rule forces the word to all caps.
- The letter "s" should always be replaced by a "z", maintaining case
- "LOL" must be added to the beginning of any input string starting with a "w" or "W"
- "OMG" must be added to the beginning (after LOL, if applicable,) of a string 32 characters1 or longer
- All evenly numbered words2 must be in ALL CAPS (Example: Cake is very delicious. becomes Cake IZ very DELICIOUZ)
- If the input string starts with "h" or "H", the entire output string should be in ALL CAPS
- Periods ( . ), commas ( , ), and apostrophes ( ' ) are to be removed
- 3 - A question mark ( ? ) should have more question marks added to it, equal to the number of words2 in the sentence (Example: Are you a foo? has 4 words, so it would be converted to r U a F00????)
- 3 - Similarly, exclamation points ( ! ) should be replaced by a series of alternating exclamation points and the number 1, equal to the number of words2 in the sentence (Example: You are a foo! becomes u R a F00!1!1)

1 Characters should be counted After: any word conversions, adding additional words, and removing punctuation. Excluding: All punctuation and any 1's added after exclamation marks ( ! ). Character count includes spaces.

2 For the sake of this kata, "words" are simply a space-delimited substring, regardless of its characters. Since the output may have a different number of words than the input, words should be counted based on the output string.
Example: whoa, you are my 123 <3 becomes LOL WHOA u R my 123 <3 = 7 words

3 The incoming string will be punctuated properly, so punctuation does not need to be validated.

*/

function n00bify(text) {
    const swap = [
      { rep: /\.|,|'/g, w: '' },
      { rep: /too|to/gi, w: '2' },
      { rep: /fore|for/gi, w: '4' },
      { rep: /be/g, w: 'b' },
      { rep: /BE|Be/g, w: 'B' },
      { rep: /are/g, w: 'r' },
      { rep: /you/g, w: 'u' },
      { rep: /please/g, w: 'plz' },
      { rep: /people/g, w: 'ppl' },
      { rep: /really/g, w: 'rly' },
      { rep: /have/g, w: 'haz' },
      { rep: /know/g, w: 'no' },
      { rep: /oo/gi, w: '00' },
      { rep: /s/g, w: 'z' },
      { rep: /S/g, w: 'Z' }
    ];
    swap.forEach(r => text = text.replace(r.rep, r.w));
    let add = '';
    if (/w/i.test(text[0])) add += 'LOL ';
    const len = text.replace(/!/g, '').length + add.length; 
    if (len >= 32) add += 'OMG ';
    text = add + text;
    const times = text.split(' ').length;
    text = text.replace(/\?/g, '?'.repeat(times));
    text = text.replace(/!/g, () => {
      let add = '!';
      for (let i = 0; i < times - 1; i++) {
        if (i % 2) add += '!';
        else add += '1';
      }
      return add;
    });
    if (/h/i.test(text[0])) text = text.toUpperCase();
    else {
      let arr = text.split(' ');
      for (let i = 1; i < arr.length; i+= 2) {
        arr[i] = arr[i].toUpperCase();
      }
      text = arr.join(' ');
    }
    return text;
}