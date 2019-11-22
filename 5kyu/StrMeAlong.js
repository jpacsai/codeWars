// Stringing me along

/* 
Implement a function that will allow you to pass in a string, with the ability to extend it with repeated calls. When no argument is passed you should return a string consisting of space-separated words you've received.

Note: there will always be at least 1 string.

For example:

createMessage("Hello")("World!")("how")("are")("you?")() === "Hello World! how are you?"
*/

const createMessage = (str) => (nextStr) => nextStr === undefined ? str : createMessage(`${str} ${nextStr}`);