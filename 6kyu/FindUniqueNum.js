// Find the unique number

/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains more than 3 numbers.

The tests contain some very huge arrays, so think about performance.

*/

function findUniq(arr) {
    return (Array.from(new Set(arr))).reduce(((t, n) => {
      if ((arr.filter(x => n === x)).length === 1) {
        t = n;
      }
      return t;
    }), 0);
}