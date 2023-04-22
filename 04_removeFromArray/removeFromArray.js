// const removeFromArray = function(theArray, ...args) {
//     let returnArray = [];

//     theArray.forEach((item) => { 
//         if(!args.includes(item))
//             returnArray.push(item);
//     });

//     return returnArray;
// };

// alternative shorter method
// const removeFromArray = (theArray, ...args) =>
//     theArray.filter(item => !args.includes(item));

// const removeFromArray = function(theArray, ...args){
//     return theArray.filter(item => !args.includes(item));
// }

function removeFromArray(theArray, ...args){
    newArray = [];
    theArray.forEach((item) => {
        if(!args.includes(item))
            newArray.push(item);
    });
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
