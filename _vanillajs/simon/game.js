let btnClrs = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

$(".btn").click(function() {
  let userChosenClr = $(this).attr("id");
  userClickedPattern.push(userChosenClr);
  console.log(userClickedPattern);
  playSound(userChosenClr);
});

function nextSequence() {
  let randomNum = Math.floor(Math.random() * 4);
  let randomChosenClr = btnClrs[randomNum];
  gamePattern.push(randomChosenClr);

  $("#" + randomChosenClr).fadeIn(100).fadeOut(100).fadeIn(100);

  let audio = new Audio("sounds/" + randomChosenClr + ".mp3");
  audio.play();

  playSound(randomChosenClr);
}

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
