function processArray(values){
  let result = [];

  for (let n = 0; n < values.length; n++) {
      if (values[n] % 2 === 0) {
          // We need to square the even numbers.
          result.push(values[n] ** 2);
      } else {
          // The odd numbers are then tripled.
          result.push(values[n] * 3);
      }
  }

  return result;
}

let values = [1,2,3,4,5,6,7,8,9,10,11,12];
let newValues = processArray(values);
console.log(newValues);


function formatArrayStrings(strings, result){
  let formattedStrings =[];
for (let n = 0; n < strings.length; n++) {
  if(result[n] % 2 === 0) {
    formattedStrings.push(strings[n].toUpperCase());
     }
  else {    formattedStrings.push(strings[n].toLowerCase());
};
};
return formattedStrings;
};     

let strings = ["Ophelia","Roselyn", "Kwame", "Adiza","Geraldina"]
let formattedStrings = formatArrayStrings(strings, newValues);
console.log(formattedStrings);

