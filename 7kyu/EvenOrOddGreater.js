// Even or Odd - Which is Greater?

/*
Given a string of numbers confirm whether the total of all the individual even numbers are greater than the total of all the indiviudal odd numbers. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return:

'Even is greater than Odd'

If the sum of odd numbers is greater than the sum of even numbers return:

'Odd is greater than Even'

If the total of both even and odd numbers are identical return:

'Even and Odd are the same'

*/

function evenOrOdd(str) {
    const even = str.split('').filter(n => n % 2 === 0).reduce(((total, n, i) => total += Number(n)), 0);
    const odd = str.split('').filter(n => n % 2 === 1).reduce(((total, n, i) => total += Number(n)), 0);
    return even === odd ? 'Even and Odd are the same' : even < odd ? 'Odd is greater than Even' : 'Even is greater than Odd';
}