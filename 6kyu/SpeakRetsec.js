// Do you speak retsec?

/*
Do you speak retsec?
You and your friends want to play undercover agents. In order to exchange your secret messages, 
you've come up with the following system: you take the word, cut it in half, and place the first half 
behind the latter. If the word has an uneven number of characters, you leave the middle at its 
previous place:

That way, you'll be able to exchange your messages in private.

Task
You're given a single word. Your task is to swap the halves. If the word has an uneven length, leave the character in the middle at that position and swap the chunks around it.

Examples
reverseByCenter("agent") == "nteag" // center character is e

reverseByCenter("secret")  == "retsec" // no center character

*/

function reverseByCenter(s){
    const middleStart = Math.floor(s.length / 2);
    const middleEnd = Math.ceil(s.length / 2);
    const first = s.slice(middleEnd);
    const middle = s.slice(middleStart, middleEnd);
    const second = s.slice(0, middleStart)
    return first + middle + second;
}