// take two numbers, get every number between them and add everything together

// how do i get all the numbers in between?
// if number is between 1 and 4, add to sum, simple.
// so if 1 < num < 4 + sum
// use a loop?








const sumAll = function(firstNum, secondNum) {
    let godSum = 0;
    if (firstNum >= secondNum) {
        const temp = firstNum;
        firstNum = secondNum;
        secondNum = temp;
    }
        if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) {
        return ('ERROR')
    }
    if (firstNum <= 0 || secondNum <= 0) {
        return ('ERROR')
    }
    
    
    for(let i = firstNum; i <= secondNum; i++) {
        godSum += i;
    }


    return godSum

}

// Do not edit below this line
module.exports = sumAll;
