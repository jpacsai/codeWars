/*
Thus Mr. Scrooge has to wait for 3 years for the initial pricipal to ammount to the desired sum.

Your task is to complete the method provided and return the number of years 'Y' 
as a whole in order for Mr. Scrooge to get the desired sum.

Assumptions : Assume that Desired Principal 'D' is always greater than the initial principal, 
however it is best to take into consideration that if the Desired Principal 'D' is equal to 
Principal 'P' this should return 0 Years.

*/

function calculateYears(principal, interest, tax, desired) {
    var year = 0;
    if (principal < desired) {
        while (principal <= desired) {
            i = principal * interest;
            t = i * tax;
            principal = principal + i - t;
            year ++;
        }
        return year;
    }
    else {
        return 0;
    }
}