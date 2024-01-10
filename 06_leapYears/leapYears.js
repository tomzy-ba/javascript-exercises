/*
    if checkYear / 4 = PASS
    if checkYear / 100 = FALSE
    if checkYear / 400 = PASS
    AHA! use an else function to make it work
    if checkYear / 400 pass
    else if checkYear / 100 FALSE
*/



const leapYears = function(checkYear) {
    if (checkYear % 400 ==0) {
        return true

    }
    else if (checkYear % 100 ==0) {
        return false
    }
    else {
    return(checkYear % 4 ==0) 
    }
    
}


// Do not edit below this line
module.exports = leapYears;
