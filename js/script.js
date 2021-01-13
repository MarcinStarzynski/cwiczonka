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

//console.log('Ćwiczenie pierwsze: ', femaleNames);

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

//console.log('Ćwiczenie drugie: ', employeesNames, employeesSalaries);

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

//console.log('Ćwiczenie trzecie', 'Suma tablicy: ', numberSum, 'Najwyższa pensja: ', biggestNumber, 'Najniższa pensja: ', smallestNumber );

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
console.log('Ćwiczenie Czwarte', 'Suma tablicy: ', valuesSum, 'Najwyższa pensja: ', biggestValue, 'Najniższa pensja: ', smallestValue );

