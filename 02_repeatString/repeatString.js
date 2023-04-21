const repeatString = function(string, iterator) {
    let newString = '';
    if(iterator < 0)
        return 'ERROR';
    for(let i = 0; i < iterator; i++)
        newString += string;
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
