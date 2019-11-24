// Calculating with Functions

/* 
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand

Divison should be integer division. For example, this should return 2, not 2.666666...:

eight(dividedBy(three()));
*/

const execute = (num1, args) => {
  if (args === undefined) return num1;
  const { num2, operation } = args;
  switch(operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case 'x':
      return num1 * num2;
    default:
      return Math.floor(num1 / num2);
  }
}

const zero = (args) => execute(0, args);
const one = (args) => execute(1, args);
const two = (args) => execute(2, args);
const three = (args) => execute(3, args);
const four = (args) => execute(4, args);
const five = (args) => execute(5, args);
const six = (args) => execute(6, args);
const seven = (args) => execute(7, args);
const eight = (args) => execute(8, args);
const nine = (args) => execute(9, args);

const plus = (num) => ({ operation: '+', num2: num });
const minus = (num) => ({ operation: '-', num2: num });
const times = (num) => ({ operation: 'x', num2: num });
const dividedBy = (num) => ({ operation: '/', num2: num });