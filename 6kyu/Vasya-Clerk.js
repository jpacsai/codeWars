// Vasya - Clerk

/*
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office 
standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket 
costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the 
tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at 
hand at that moment. Otherwise return NO.

*/

function tickets(peopleInLine){
    let till = {
      '25' : 0,
      '50' : 0,
      '100' : 0
    };
    for (let cash in peopleInLine) {
      switch (peopleInLine[cash]) {
        case 25:
          till[25]++;
          break;
        case 50:
          till[50]++;
          till[25]--;
          break;
        case 100:
          till[100]++;
          if (till[50]) {
            till[50]--;
          }
          else {
            till[25] -= 2;
          }
          till[25]--;
      }
      if (till[25] < 0) {
        return "NO";
      }
    }
    return "YES";
}