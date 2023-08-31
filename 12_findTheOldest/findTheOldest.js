const findTheOldest = function(people) {
    

    let age = 0;
    let index = 0;
    for(let i = 0; i<people.length; i++){
        if(people[i].yearOfDeath){
            let peopleAge = people[i].yearOfDeath - people[i].yearOfBirth;
            if(peopleAge > age){
            age = peopleAge;
            index = i;
            }
        }
        else if(!people[i].yearOfDeath){
            let date = new Date();
            let peopleAge = date.getFullYear() - people[i].yearOfBirth;
            if(peopleAge > age){
                age = peopleAge;
                index = i;
                }
        }
        
    }
    return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;
