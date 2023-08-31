const fibonacci = function(userInput) {
    let a = 1;
    let b = 1;
    let c;

    userInput = Number(userInput);
    
    if(userInput === 1 || userInput === 2){
        return 1;
    }
    else if(userInput < 1){
        return "OOPS";
    }
    else{
        for(let i = 0; i<= userInput -3; i++){
            c = a+b;
            a = b;
            b = c;
        }
        return c;
    }
};
module.exports = fibonacci;
