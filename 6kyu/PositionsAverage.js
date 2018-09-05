// Positions Average

/*
Suppose you have 4 numbers: '0', '9', '6', '4' and 3 strings composed with them:

s1 = "6900690040"
s2 = "4690606946"
s3 = "9990494604"
Compare s1 and s2 to see how many positions they have in common: 0 at index 3, 6 at index 4, 4 at index 8 ie 3 common positions out of ten.

Compare s1 and s3 to see how many positions they have in common: 9 at index 1, 0 at index 3, 9 at index 5 ie 3 common positions out of ten.

Compare s2 and s3. We find 2 common positions out of ten.

So for the 3 strings we have 8 common positions out of 30 ie 0.2666... or 26.666...%

Given a set of n strings our function pos_average will calculate the average percentage of positions that are the same between the (n * (n-1)) / 2 sets of strings taken amongst the given 'n' strings.

The function returns the percentage formatted as a float with 10 decimals but the result is tested at 1e.-9 (see function assertFuzzy in the tests).

Example:
Given string s = "444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490" composing a set of n = 10 substrings (hence 45 combinations), pos_average returns 29.2592592593.

In a set the n strings will have the same length ( > 0 ).

*/

function posAverage(s) {
    let common = 0;
    const strings = s.split(', ');
    let arr = [];
    for (let i = 0 ; i < strings[0].length; i++) {
      arr.push([]);
      for (let j = 0; j < strings.length; j++) {
        arr[i].push(strings[j][i]);
      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[0].length - 1; j++) {
        for (let k = j + 1; k < arr[0].length; k++) {
          if (arr[i][j] === arr[i][k]) {
            common++;
          }
        }
      }
    }
    const comb = (strings.length * (strings.length - 1)) / 2 * strings[0].length;
    return common / comb * 100;
}