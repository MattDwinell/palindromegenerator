const builder = require('./basicPalindromeBuilder');
const randomWords = require('./randomWordGenerator');

const simpleGenerator = (num) =>{

    let palindromeDump = [];
      for ( let i = 0; i< 200; i++){
        let randomWordArray = randomWords(num);
        randomWordArray.push('a', 'an', 'nah');
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
}


simpleGenerator(3);