// Is a number prime?

/*
Define a function isPrime/is_prime() that takes one integer argument and returns 
true/True or false/False depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 
that has no positive divisors other than 1 and itself.

Example
isPrime(5)
=> true

*/

function isPrime(num) {
    var m;
    if (num < 2) {m = false;}
    if (num === 2) {m = true;}
    if (num > 2) {
      m = true;
      for (var x = 2; x < num; x++) {
        if (num % x === 0){m = false;}
      }
    }
    return m;
}