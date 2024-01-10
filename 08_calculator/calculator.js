const add = function(numAdd1, numAdd2) {
  return numAdd1 + numAdd2
};

const subtract = function(numSub1, numSub2) {
  return numSub1 - numSub2
};

const sum = function(arraySum) {
  let godSum = 0;
  for (let i = 0; i < arraySum.length; i++) {
    godSum += arraySum[i];
  }
  return godSum;
}

const multiply = function(arrayMulti) {
  let godMulti = 1;
  for (let i = 0; i < arrayMulti.length; i++) {
    godMulti *= arrayMulti[i];
  }
  return godMulti;
};

const power = function(powerNum1, powerNum2) {
  return powerNum1 ** powerNum2
	
};

const factorial = function(factorNum) {
  if (factorNum == 0 || factorNum == 1) {
    return 1;
  }
  else {
  let factorEndSum = 1;
  for (let i = factorNum; i > 0; i--) {
    factorEndSum *= i;
  }

  return factorEndSum
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
