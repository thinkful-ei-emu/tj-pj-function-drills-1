'use strict';

function getYearOfBirth(age) {
  let yearOfBirth = 2019-age;
  return yearOfBirth;
}


function createGreeting(name, age){
  if (age < 0) {
    throw new Error("Age cannot be negative.");
  }

  if (!(exists(name) && exists(age))){
    throw new Error('Arguments not valid');
  }

  if ((typeof name !== "string") || (typeof age !== "number")){
    throw new TypeError();
  }

  const yob = getYearOfBirth(age);
  return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yob}.`;
}

try {
  const greeting1 = createGreeting("Tommy", 13);
}

catch(e) {
  console.log(e);
}
