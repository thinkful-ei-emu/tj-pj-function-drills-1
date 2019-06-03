'use strict';

function getYearOfBirth(age) {
  let yearOfBirth = 2019-age;
  return yearOfBirth;
}


function createGreeting(name, age){
  const yob = getYearOfBirth(age);
  return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yob}.`;
}

const greeting1 = createGreeting();
console.log(greeting1);

