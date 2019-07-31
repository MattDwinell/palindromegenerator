const checker = require("./basicPalindromeChecker");
const cleanInput = require("./inputCleaner");

//importing a combinatorics helper, which will let us easily get all permutations of an array.
const Combinatorics = require('js-combinatorics');


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
    let cleanedInput = cleanInput(input);
let inputArray = cleanedInput.trim().split(' ');
let palindromeArray = [];
cmb = Combinatorics.permutationCombination(inputArray).toArray();
let testcmb = cmb.map((item)=>{
    checker(item);
    if(checker(item) && (!palindromeArray.includes(item)) && (item.length !== 1)){
        palindromeArray.push(item);
    }
})
console.log(palindromeArray);
if(palindromeArray.length > 0){
return(palindromeArray)}
else {
    return false;
}
}
// basicBuilder('bob racecar bob bob racecar ');
// basicBuilder(`Check if an array includes "Mango"`);
// basicBuilder('I like bugs sgub ekil i.');
// basicBuilder(`This method returns true if the array contain test`);
// basicBuilder(`Richard Smith by  buried on  was an`);
module.exports = basicBuilder;