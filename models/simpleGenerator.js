const builder = require('./basicPalindromeBuilder');
const randomWords = require('./randomWordGenerator');
const fs = require('fs');

const simpleGenerator = (num) =>{

    let palindromeDump = [];
      for ( let i = 0; i< 200; i++){
        let randomWordArray = randomWords(num);
        randomWordArray.push('to', 'be', 'hat', 'no');
         builder(randomWordArray);
         if(builder(randomWordArray)){
             palindromeDump.push(builder(randomWordArray))

         }
     }
     let filteredPalindomeDump = [];
     for (let i = 0 ; i<palindromeDump.length; i ++){
         if ((i<(palindromeDump.length-1)) && (palindromeDump[i].join('') == palindromeDump[(i+1)].join(''))){
          palindromeDump.splice(i, 1);
          i=0;   
         }

     }
     
     console.log(palindromeDump);

if(palindromeDump.length>0){
    fs.appendFile('../textFiles/first.txt', palindromeDump.toString(), function (err) {
        if (err) throw err;
        console.log('Saved!');
})

};
}


simpleGenerator(2);