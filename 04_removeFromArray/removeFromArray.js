const removeFromArray = function(arr , ...removeNum) {

    for(let i = 0; i< removeNum.length; i++){
        let index = arr.indexOf(removeNum[i]);

        if(index > -1){
            arr.splice(index, 1);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
