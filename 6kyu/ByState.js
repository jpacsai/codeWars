// ByState

/*
Given a string with friends to visit in different states:

ad3="John Daggett, 341 King Road, Plymouth MA
Alice Ford, 22 East Broadway, Richmond VA
Sal Carpenter, 73 6th Street, Boston MA"
we want to produce a result that sorts the names by state and lists the name of the state followed by the name of each person residing in that state (people's names sorted). When the result is printed we get:

Massachusetts
.....^John Daggett 341 King Road Plymouth Massachusetts
.....^Sal Carpenter 73 6th Street Boston Massachusetts
^Virginia
.....^Alice Ford 22 East Broadway Richmond Virginia
Spaces not being always well seen, in the above result ^ means a white space.

Not printed, the resulting string will be:

"Massachusetts\n..... John Daggett 341 King Road Plymouth Massachusetts\n..... Sal Carpenter 73 6th Street Boston Massachusetts\n Virginia\n..... Alice Ford 22 East Broadway Richmond Virginia"
Notes
There can be a blank last line in the given string of adresses.
The tests only contains CA, MA, OK, PA, VA, AZ, ID, IN for states.
You can see another example in the "Sample tests".

*/

function byState(str) {
  const abbr = {
    CA: 'California',
    MA: 'Massachusetts',
    OK: 'Oklahoma',
    PA: 'Pennsylvania',
    VA: 'Virginia',
    AZ: 'Arizona',
    ID: 'Idaho',
    IN: 'Indiana'
  }
  
  // create array of friends and replace state abbreviation with full state name
  const friends = str.trim().split('\n').map(friend => {
    const withoutComma = friend.replace(/,/g, '');
    const abbreviation = withoutComma.slice(-2);
    return withoutComma.replace(abbreviation, abbr[abbreviation]);
  });
  
  // creates obj with state keys, inserts friends into relevant state
  const friendsGrouped = friends.reduce((obj, friend) => {
    const state = friend.split(' ').slice(-1)[0];
    const stateValue = obj[state] || [];
    return {...obj, [state]: [...stateValue, friend] };
  }, {});
  
  // parses object to final, formatted string
  const final = Object.keys(friendsGrouped).sort().reduce((str, state, index) => {
    const friendArr = friendsGrouped[state].sort().join('\r\n..... ');
    return str + state + '\r\n..... ' + friendArr + ((index < Object.keys(friendsGrouped).length - 1) ? '\r\n ' : '');
  }, '');
  
  return final;
}