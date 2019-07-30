const basicPalindromeChecker = (input) =>{

    //checks the type of input being entered and converts it to a string
    if(Array.isArray(input)){
        input = input.join(' ');
    } else if (typeof input ==='string'){
    } else {
        return console.log('please input a string or an array');
    }

    //runs the input through another function that removes all punctuation while keeping spaces.
    let cleanedInput = cleanInput(input);
    console.log(cleanedInput);

    //checks to see if the reversed version of the string has the same sequence/position of characters as the original string.
    //if it does, it says the item is a palindrome. otherwise, it says it's not a palindrome. when optimized, it will return true/false to a more involved palindrome function.
    let adjustedInput = cleanedInput.toLowerCase().trim().split(' ').join('');
    let reversedInput = adjustedInput.split("").reverse().join("") 
    console.log(adjustedInput);
    console.log(reversedInput);
    if (adjustedInput === reversedInput){
        console.log(`${input} is a palindrome`);
        return input;
    } else {
        console.log(` ${input} is not a palindrome`);
        return false;
    }
}
function cleanInput(c) {
    let arr = c.split('');
    for(let i = 0; i<arr.length; i++){
        if(   (arr[i] === '.') ||(arr[i] === '!') ||(arr[i] == '?') ||(arr[i] === '/') ||(arr[i] === '$') ||(arr[i] === '-')  ||(arr[i] === '0')  ||(arr[i] === '1')  ||(arr[i] === '2')  ||(arr[i] === '3')  ||(arr[i] === '4')  ||(arr[i] === '5')  ||(arr[i] === '6')  ||(arr[i] === '7')  ||(arr[i] === '8') ||(arr[i] === '9')       ){
            arr.splice(i, 1);
            i=-1;
        }
    }
    return arr.join('')

  }
   
module.exports = basicPalindromeChecker;