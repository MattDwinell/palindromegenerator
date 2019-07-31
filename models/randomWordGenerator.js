const randomWords = require('random-words');
const randomWordGenerator = (num) => {
    return randomWords(num);
};
module.exports = randomWordGenerator;