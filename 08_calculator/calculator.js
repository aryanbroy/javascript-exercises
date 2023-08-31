const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;

	for(let i = 0; i< arr.length; i++){
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let product = 1;

  for(let i = 0; i<arr.length; i++){
    product *= arr[i];
  }
  return product;
};

const power = function(num, power) {
	let result = 1;
  for(let i = 0; i<power; i++){
    result = result * num;
  }
  return result;
};

const factorial = function(n) {
	let temp = n;
  
  if(n=== 0){
    return 1;
  }
  else{
    for(let i = 1; i<temp; i++){
      n = n * (temp - i);
    }
    return n;
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
