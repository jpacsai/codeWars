// Simple string matching

/*
You will be given two strings a and b consisting of lower case letters, but a will have at most one asterix character. The asterix (if any) can be replaced with an arbitrary sequence (possibly empty) of lowercase Latin letters. No other character of of string a can be replaced with anything. If it is possible to replace the asterix in a to obtain a string b, then the string b matches the pattern.

If the string matches, return true else false.

For example:
solve("code*s","codewars") = true, because we can replace the asterix(*) with "war" to match the second string. 
solve("codewar*s","codewars") = true, because we can replace the asterix(*) with "" to match the second string. 
solve("codewars","codewars") = true, because the string already match.
solve("a","b") = false

*/

function solve(a, b) {
    const arr = a.slice().split('*');
    const reg = new RegExp("^" + arr[0] + "(.*?)" + arr[1] + "$");
    return reg.test(b) || a === b;
}