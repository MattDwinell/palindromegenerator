const basicPalindromeChecker = (input) =>{
    if(Array.isArray(input)){
        console.log('converting array to string');
        input = input.join(' ');
        console.log(input);
    } else if (typeof input ==='string'){
        console.log('input is already a string');
    } else {
        return console.log('please input a string or an array');
    }
    console.log(input);
    let adjustedInput = input.toLowerCase().trim().split(' ').join('');

    let reversedInput = adjustedInput.split("").reverse().join("") 
    console.log(adjustedInput);
    console.log(reversedInput);
    if (adjustedInput === reversedInput){
        console.log(`${input} is a palindrome`);
    } else {
        console.log('not a palindrome');
    }
    
}
basicPalindromeChecker(' Blah blah the indomintable');
basicPalindromeChecker('Bob is si bob.')
basicPalindromeChecker('bobBybbob')
basicPalindromeChecker(['boB','bob','duck']);
basicPalindromeChecker(['bob','racecar','bob']);