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
