// Add commas to a number

/*
Your task is to convert a given number into a string with commas added for easier readability. The number should be rounded to 3 decimal places and the commas should be added at intervals of three digits before the decimal point. There does not need to be a comma at the end of the number.

You will receive both positive and negative numbers.

Examples
commas(1) == "1"
commas(1000) == "1,000"
commas(100.2346) == "100.235"
commas(1000000000.23) == "1,000,000,000.23"
commas(-1) == "-1"
commas(-1000000.123) == "-1,000,000.123"

*/

function commas(n) {
    const num = Math.abs(n);
    const parts = num.toString().split('.'); // arr -> [0] integer, [1] after decimal point
    const revInt = parts[0].split('').reverse().join(''); // reverse integer str
    const comma = revInt.match(/.{1,3}/g).join(',').split('').reverse().join(''); // add commas, reverse back
    const dec = parts[1] ? (Math.round(('0.' + parts[1]) * 1000) / 1000).toString().substring(1) : ''; // round to 3 digit
    return (n < 0 ? '-' : '') + comma + dec;
}