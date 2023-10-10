let names = [], newNames = [];
let nameInput = prompt("Name:");

while (nameInput) {
  names.push(nameInput);
  nameInput = null;
  console.log(names);
  nameInput = prompt("Next,");
}

function randomizer() {

  while (names.length != 0) {
    let ran = Math.floor(Math.random() * names.length);
    newNames.push(names[ran]);
    names.splice(ran, 1);
  }

  if (names.length < 1) {
    names = null;
    console.log(newNames);
  }

}
