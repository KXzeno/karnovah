let btnClrs = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {
  let randomNum = Math.floor(Math.random() * 4);
  let randomClr = btnClrs[randomNum];
  gamePattern.push(randomClr);

  $("#" + randomClr).fadeIn(100).fadeOut(100).fadeIn(100);

  let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}
