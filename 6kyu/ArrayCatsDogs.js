// Arrays of cats and dogs

/*
Consider an array containing cats and dogs. Each dog can catch only one cat, but cannot catch a cat that is more than n elements away. Your task will be to return the maximum number of cats that can be caught.

For example:

solve(['D','C','C','D','C'], 2) = 2, because the dog at index 0 (D0) catches C1 and D3 catches C4. 
solve(['C','C','D','D','C','D'], 2) = 3, because D2 catches C0, D3 catches C1 and D5 catches C4.
solve(['C','C','D','D','C','D'], 1) = 2, because D2 catches C1, D3 catches C4. C0 cannot be caught because n == 1.
solve(['D','C','D','D','C'], 1) = 2, too many dogs, so all cats get caught!

*/

function solve(arr,n){
    let cats = 0;
    const dogs = arr.filter(a => a === 'D').length;
    for (let i = 0; i < dogs; i++) {
      const from = Math.max([arr.indexOf('D') - n], 0);
      const to = Math.min(arr.indexOf('D') + n, arr.length);
      const cat = arr.slice(from, to + 1).indexOf('C');
      if (cat !== -1) {
        arr[cat + from] = 'X';
        cats++;
      }
      arr[arr.indexOf('D')] = 'X';
    }
    return cats;
}