const reverseString = function(word) {
    let reversedWord = '';

    const wordArray = word.split('');
    for(let i = wordArray.length - 1; i >= 0; i--)
        reversedWord += wordArray[i]; 

    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
