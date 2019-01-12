// NASA Countdown

/*
You have the job to implement a countdown function that will be used for the next NASA spatial mission. The function takes a duration in milliseconds and return a string in countdown format.

If it's counting down, the first character should be '-', if it's counting up it should be '+'. Then it should return the number of: hours (min 2 units), minutes (2 units) and seconds (2 units).

countdown(-154800000)  // return  '-43:00:00'
countdown(0)           // return  '+00:00:00'
countdown(61000)       // return  '+00:01:01'
countdown(360000000)   // return '+100:00:00'

*/

function countdown (millisecs) {
    const sec = millisecs / 1000;
    const h = String(Math.floor(sec / 3600)).padStart(2, '0');
    const m = String(Math.floor(sec / 60 - h * 60)).padStart(2, '0');
    const s = String(Math.floor(sec - h * 3600 - m * 60)).padStart(2, '0');
    return (millisecs >= 0 ? '+' : '') + h + ':' + m + ':' + s;
}