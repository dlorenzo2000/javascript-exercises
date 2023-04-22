function sumAll(min, max) {
    if(!Number.isInteger(min)  
        || !Number.isInteger(max) 
        || min === null 
        || max === null 
        || min < 0 || max < 0)
        return 'ERROR';

    if(!isNaN(min) || !isNaN(max))
        console.log(`min is ${min}, max is ${max}`);
    else
        console.log('ERROR');
 
    let total = 0;
    if(min > max){
        let temp = max;
        max = min;
        min = temp;
    }
    for(let i = min; i <= max; i++)
            total += i;   

    return total;
};
 
// sumAll("90", 10);

// Do not edit below this line
module.exports = sumAll;
