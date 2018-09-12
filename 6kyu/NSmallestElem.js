// N smallest elements in original order

/*
Your task is to write a function that does just what the title suggests (so, fair warning, be aware that you are not getting out of it just throwing a lame bas sorting method there) with an array/list/vector of integers and the expected number n of smallest elements to return.

Also:

the number of elements to be returned cannot be higher than the array/list/vector length;
elements can be duplicated;
in case of duplicates, just return them according to the original order (see third example for more clarity).
Same examples and more in the test cases:

firstNSmallest([1,2,3,4,5],3) === [1,2,3] //well, not technically ===, but you get what I mean
firstNSmallest([5,4,3,2,1],3) === [3,2,1]
firstNSmallest([1,2,3,4,1],3) === [1,2,1]
firstNSmallest([1,2,3,-4,0],3) === [1,-4,0]
firstNSmallest([1,2,3,4,5],0) === []

*/

function firstNSmallest(array, n){
    const sorted = array.slice().sort((a, b) => a - b).slice(0, n);
    const highest = sorted[sorted.length - 1]
    let highestCount = sorted.filter(num => num === highest).length;
    const arr = [];
    for (let i = 0 ; i < array.length; i++) {
      if (array[i] < highest && arr.length < n || array[i] === highest && highestCount - 1 >= 0) {
          arr.push(array[i]);
          if (array[i] === highest) {
            highestCount--;
          }
        if (arr.length === n) {
          return arr;
        }
      }
    }
    return arr;
}