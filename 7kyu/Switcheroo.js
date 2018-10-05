// Switcheroo

/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'

*/

function switcheroo(x){
    return x.split('').map(char => char === 'a' ? 'b' : char === 'b' ? 'a' : 'c' ).join('');
}