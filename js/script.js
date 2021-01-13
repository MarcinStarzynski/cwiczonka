'use strict';
console.log('Tablice i Obiekty');
//Ćwiczenie 1
const names = ['Kasia', 'Tomek', 'Amanda', 'Maja', 'Julianna', 'Czesław'];

const singleItems = names.splice('');

const femaleNames = [];

for (let item of singleItems){
  const itemLenght = item.length;
  let lastCharacter = item.charAt(itemLenght - 1);
  if(lastCharacter == 'a'){
    femaleNames.push(item);
  }
}

console.log('Ćwiczenie pierwsze: ', femaleNames);
console.log('________________________________________');

//Ćwiczenie 2
const employees = {
  john: {
    name: 'John Doe',
    salary: 3000
  },
  amanda: {
    name: 'Amanda Doe',
    salary: 4000
  },
};

const employeesNames = [];
const employeesSalaries = [];

for(let employee in employees){

  const name = employees[employee].name.split(' ')[0];

  employeesNames.push(name);
  employeesSalaries.push(employees[employee].salary);
}

console.log('Ćwiczenie drugie: ', employeesNames, employeesSalaries);
console.log('________________________________________');

//Ćwiczenie 3
const salaries = [2000, 3000, 1500, 6000, 3000];

let numberSum = 0;
let biggestNumber = 0;
let smallestNumber = Infinity;

for(let number in salaries){
  numberSum += salaries[number];
  if( biggestNumber < salaries[number]){
    biggestNumber = salaries[number];
  }
  if( smallestNumber > salaries[number]){
    smallestNumber = salaries[number];
  }
}

console.log('Ćwiczenie trzecie: ', 'Suma tablicy: ', numberSum, 'Najwyższa pensja: ', biggestNumber, 'Najniższa pensja: ', smallestNumber );
console.log('________________________________________');

//Ćwiczenie 4
const persons = {
  john: 2000,
  amanda: 3000,
  thomas: 1500,
  james: 6000,
  claire: 3000,
};

const values = Object.values(persons);

let valuesSum = 0;
let biggestValue = 0;
let smallestValue = Infinity;

for(let number in values){
  valuesSum += values[number];
  if( biggestValue < values[number]){
    biggestValue = values[number];
  }
  if( smallestValue > values[number]){
    smallestValue = values[number];
  }
}
console.log('Ćwiczenie Czwarte: ', 'Suma tablicy: ', valuesSum, 'Najwyższa pensja: ', biggestValue, 'Najniższa pensja: ', smallestValue );
console.log('________________________________________');

//Ćwiczenie 5
const tags = ['news', 'code', 'news', 'sport', 'hot', 'news', 'code'];

let uniqueTags = {};

for(let tag of tags) {
  if(!uniqueTags[tag]) uniqueTags[tag] = {appearances: 1};
  else uniqueTags[tag].appearances++;
}

console.log('Ćwiczenie Piąte: ', uniqueTags);
console.log('________________________________________');
console.log('________________________________________');
console.log('Praca z funkcjami');

//Ćwiczenie 4
const employees1 = [
  { name: 'Amanda Doe', salary: 3000 },
  { name: 'John Doe', salary: 4000 },
  { name: 'Claire Downson', salary: 2000 },
  { name: 'Freddie Clarkson', salary: 6000 },
  { name: 'Thomas Delaney', salary: 8200 }
];

const filterEmployees = function(array , minValue, maxValue){
  for(let employeeSingle of array){
    if(employeeSingle.salary <= minValue || employeeSingle.salary >= maxValue){
      const index = array.indexOf(employeeSingle);
      array.splice(index, 1);
    }
  }
  return array;
};

const filteredEmployees = filterEmployees(employees1, 2000, 8000);
console.log('Ćwiczenie czwarte: ', filteredEmployees);
console.log('________________________________________');

//Ćwiczenie 5
const obj = {
  firstName: 'John',
  lastName: 'Doe'
};

const propertyFunction = function (obj){
  for(let paramId in obj){
    const param = obj[paramId];
    console.log('Ćwiczenie piąte: ',paramId + ': ' + param);
  }
};

propertyFunction(obj);
console.log('________________________________________');

//Ćwiczenie 6
const tagsArray = ['news', 'code', 'doggo', 'news', 'sport', 'hot', 'news', 'code'];

function forEach( array, callback) {
  for(const tag of array) {
    callback = tag.split('');
    console.log(callback);
  }
}
forEach(tagsArray);
console.log('________________________________________');
//Ćwiczenie 7
