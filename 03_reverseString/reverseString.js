const reverseString = function(word) {
    let string = word;
    let arr = string.split('');
    let reverseString = '';

    for(let i = arr.length-1; i>=0; i--){
        reverseString += arr[i];
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
