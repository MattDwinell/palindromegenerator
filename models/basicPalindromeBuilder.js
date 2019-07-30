const checker = require("./basicPalindromeChecker");
const basicBuilder = (input) =>{
    //we're gonna turn our input into an array or words, and then we need to try every combination of words the input gives us.
    //so something like 'bob racecar racecar' will return one palindrome: racecar bob racecar.
    //essentially we'll keep rearranging the input field and running it through the checker function. every time we get a match, we'll add it to a matches array, and return the matches array at the end.


//checking input and converting it to a string.
    if(Array.isArray(input)){
        input = input.join(' ');
    } else if (typeof input ==='string'){
    } else {
        return console.log('please input a string or an array');
    }
let inputArray = input.trim().split(' ');
console.log(inputArray);
let palindromeArray = [];
if (checker(inputArray)){
    palindromeArray.push(inputArray);
}
console.log(palindromeArray);
}
basicBuilder('I like bugs');
basicBuilder('I like bugs sgub ekil i.');