let btnClrs = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {
  let randomNum = Math.floor(Math.random() * 4);
  let randomClr = btnClrs[randomNum];
  gamePattern.push(randomClr);
}
