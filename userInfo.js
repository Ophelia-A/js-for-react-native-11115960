let id = 1;

function createUserProfiles(names, modifiedNames) {
  return names.map((name, index) => {
    return {
      originalName: name,
      modifiedName: modifiedNames[index],
      id: id++,
    };
  });
}


const names = ["Ophelia","Roselyn", "Kwame", "Adiza","Geraldina"]
const modifiedNames = [ 'ophelia', 'ROSELYN', 'kwame', 'ADIZA', 'geraldina' ];
const userProfiles = createUserProfiles(names, modifiedNames);
console.log(JSON.stringify(userProfiles, null, 2));