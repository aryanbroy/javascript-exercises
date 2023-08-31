const getTheTitles = function(books) {
   
    let storeTitle = []
    for(let i = 0; i<books.length; i++){
    storeTitle.push(books[i].title)
    }
    return storeTitle;
};

// Do not edit below this line
module.exports = getTheTitles;
