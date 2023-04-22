// Sat Apr 22/23 1046hrs

const leapYears = function(year) {
    if(!Number.isInteger(year) || year < 0)
        return 'ERROR';

    let isLeapYear = false; 

    if((year % 100 != 0 || year % 400 === 0) && year % 4 === 0)
        isLeapYear = true; 

    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
