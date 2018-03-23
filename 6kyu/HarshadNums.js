// Harshad or Niven numbers

/*
Harshad numbers are positive numbers that can be divided (without remainder) by the sum of their digits.

For example, the following numbers are Harshad numbers:

10, because 1 + 0 = 1 and 10 equals 1 * 10
27, because 2 + 7 = 9 and 27 equals 9 * 3
588, because 5 + 8 + 8 = 21 and 588 equals 21 * 28
While those numbers are not:

19, because 1 + 9 = 10 and 19 is not divisible by 10
589, because 5 + 8 + 9 = 22 and 589 is not divisible by 22
1001, because 1 + 1 = 2 and 1001 is not divisible by 2
Harshad numbers can be found in any number base, but we are going to focus on base 10 exclusively.

Your task is to complete the skeleton Harshad object ("static class") which has 3 functions.

isValid that checks if the number is a Harshad number or not // Harshad.isValid( 1 ) returns true
getNext that returns the next Harshad number // Harshad.getNext( 0 ) returns 1
getSerie that returns a serie of n Harshad number, optional start value not included // Harshad.getSerie( 3, 1000 ) returns [ 1002, 1008, 1010 ], while // Harshad.getSerie( 3 ) returns [ 1, 2, 3 ]
You do not need to care about the passed parameters in the test cases, they will always be valid integers between 0 and 2000 (except for the start argument in getSerie() which is optional and should default to 0).

*/

var number = 18;
var count = 10;
var start = 1000;

var Harshad = ( function() {
  'use strict';

  return {
    /**
     * Returns true when the given number is a valid Harshad number.
     *
     * @param {Number} number The given number
     * @returns {Boolean}
     * @function Harshad.isValid
     */
    isValid: function( number ) {
      let num = 0;
      for (let i = 0; i < (number + '').length; i++) {
        num += Number((number + '')[i]);
      }
      return number % num === 0;
    },
    
    
    /**
     * Gets the next Harshad number after the given number.
     *
     * @param {Number} number The given number
     * @returns {Number}
     * @function Harshad.getNext
     */
    getNext: function( number ) {
      var next = number + 1;
      while ( this.isValid(next) === false ) {
        next++;
      }
      return next;
    },
    
    /**
     * Returns the suite of Harshad numbers, starting after a given number.
     *
     * @param {Number} count The number of elements to return
     * @param {Number} start The number after which the serie should start;
     *  defaults to 0
     * @returns {Array}
     * @function Harshad.getSerie
     */
    getSerie: function( count, start ) {
      let s = start || 0;
      let arr = [];
      for (let j = 0; j < count; j++) {
        s = this.getNext(s);
        arr.push(s);
      }
      return arr;
    }
  };

} () );