const findTheOldest = function(people) {
    return people.reduce((oldest, person) => 
        (oldest.hasOwnProperty('yearOfDeath') 
            ? oldest.yearOfDeath - oldest.yearOfBirth 
            : new Date().getFullYear() - oldest.yearOfBirth) 
        > (person.hasOwnProperty('yearOfDeath') 
            ? person.yearOfDeath - person.yearOfBirth 
            : new Date().getFullYear() - person.yearOfBirth) 
        ? oldest : person
    );
};

// Do not edit below this line
module.exports = findTheOldest;
