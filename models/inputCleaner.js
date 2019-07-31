function cleanInput(c) {
    let arr = c.split('');
    for(let i = 0; i<arr.length; i++){
        if( (arr[i] === ',') ||(arr[i] === "'") ||  (arr[i] === '"') ||(arr[i] === '!') ||(arr[i] == '?') ||(arr[i] === '/') ||(arr[i] === '$') ||(arr[i] === '-')  ||(arr[i] === '0')  ||(arr[i] === '1')  ||(arr[i] === '2')  ||(arr[i] === '3')  ||(arr[i] === '4')  ||(arr[i] === '5')  ||(arr[i] === '6')  ||(arr[i] === '7')  ||(arr[i] === '8') ||(arr[i] === '9')  ||(arr[i] === '.')  ||(arr[i] === '(') ||(arr[i] === ')')     ){
            arr.splice(i, 1);
            i=-1;
        }
    }
    return arr.join('')
  }

  module.exports = cleanInput;