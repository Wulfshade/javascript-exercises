const findTheOldest = people => people.reduce(
  (prevPerson, currentPerson) => {
      let currentYear = new Date().getFullYear();
    let prevPersonAge = (prevPerson.yearOfDeath ? prevPerson.yearOfDeath : currentYear) - prevPerson.yearOfBirth;
    let currentPersonAge = (currentPerson.yearOfDeath ? currentPerson.yearOfDeath : currentYear) - currentPerson.yearOfBirth;
    return (prevPersonAge > currentPersonAge) ? prevPerson : currentPerson;
  }
);

// Do not edit below this line
module.exports = findTheOldest;
