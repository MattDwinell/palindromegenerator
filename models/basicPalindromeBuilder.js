const checker = require("./basicPalindromeChecker");
checker('!? B   o  //////oo...///1325684//  o    b !...');

const basicBuilder = (input) =>{
    //we're gonna assume that our input is a string, and operate as such. we need to try every combination of words the input gives us.
    //so something like 'bob racecar racecar' will return one palindrome: racecar bob racecar.
    //essentially we'll keep rearranging the input field and running it through the checker function. every time we get a match, we'll add it to a matches array, and return the matches array at the end.

    
}