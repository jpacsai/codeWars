// Rectangle into Squares

/*
The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).

     5 x 3 rectangle
     _ _ _ _ _
    |     |2*2|
    |3 * 3|_ _|
    |_ _ _|1|1|

Can you translate this drawing into an algorithm?

You will be given two dimensions

a positive integer length (parameter named lng)
a positive integer width (parameter named wdth)

sqInRect(5, 3) should return [3, 2, 1, 1]
sqInRect(3, 5) should return [3, 2, 1, 1]

*/

function sqInRect(lng, wdth){
    if (lng === wdth) return null;
    let arr = [];
    while (lng > 0 && wdth > 0) {
        arr.push(lng > wdth ? wdth : lng)
        lng > wdth ? lng -= wdth : wdth -= lng;
    }
    return arr;
}