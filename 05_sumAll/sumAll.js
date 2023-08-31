const sumAll = function(start, end) {
    let sum = 0;

    if(start > 0 && typeof(start) === "number" && typeof(end) === "number" ){
        if(start < end){
            for(let i = start; i<=end; i++){
                sum += i;
            } 
        }
        else if(start > end){
            for(let i = end; i<=start; i++){
                sum +=i;
            }
        }
        return sum;
    }
    
    else{
        return ("ERROR");
    }  
};

// Do not edit below this line
module.exports = sumAll;
