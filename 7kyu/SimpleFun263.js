// Simple Fun #263: Even Numbers Before Fixed

/*
Given array of integers sequence and some integer fixedElement, output the number of even values in 
sequence before the first occurrence of fixedElement or -1 if and only if fixedElement is not 
contained in sequence.

Examples
For sequence = [1, 4, 2, 6, 3, 1] and fixedElement = 6, the output should be 2.

There are 2 even numbers before 6: 4 and 2

For sequence = [2, 2, 2, 1] and fixedElement = 3, the output should be -1.

There is no 3 appears in sequence. So returns -1.

For sequence = [1, 3, 4, 3] and fixedElement = 3, the output should be 0.

3 appears in sequence, but there is no even number before 3

*/

function evenNumbersBeforeFixed(sequence, fixedElement) {
    let fixIndex = sequence.findIndex(a => a === fixedElement);
    return (fixIndex === -1) ? -1 : sequence.slice(0,sequence.findIndex(a => a === fixedElement)).filter(b => b % 2 === 0).length;
}