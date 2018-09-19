// Count characters in your string

/*
The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

What if the string is empty ? Then the result should be empty object literal { }

*/

function count (string) {  
    let obj = {}
    const chars = Array.from(new Set(string));
    for (let i = 0; i < chars.length; i++) {
        const reg = new RegExp(chars[i], 'g');
        obj[chars[i]] = string.match(reg).length;
    }
    return obj;
}