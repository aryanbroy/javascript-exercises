const palindromes = function (word) {
    let string = word.toLowerCase();
    let finalString = string.split(" ").join("").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let arr = string.split('');
    let reverseString = '';

    for(let i = arr.length-1; i>=0; i--){
        reverseString += arr[i];
    }
    let result = reverseString.split(" ").join("");
    let finalResult = result.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

    if(finalResult === finalString){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
