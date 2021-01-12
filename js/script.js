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
console.log(employees);

const employeesNames = [];
const employeesSalaries = [];

for(let employee in employees){
  console.log(employees[employee]);

  const name = employees[employee].name.split(' ')[0];

  employeesNames.push(name);
  employeesSalaries.push(employees[employee].salary);
}

console.log('Ćwiczenie drugie: ', employeesNames, employeesSalaries);
