// Write Number in Expanded Form

/*
You will be given a number and you will need to return it as a string in Expanded Form.

For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

*/

function expandedForm(num) {
    const str = num.toString();
    let result = [];
    let temp = ''
    for (let i = 0; i < str.length; i++) {
        temp += str[i];
        if (str[i + 1] !== '0') {
            temp += '0'.repeat(str.length - i - 1);
            result.push(temp);
            temp = '';
        }
    }
    return result.join(' + ');
}