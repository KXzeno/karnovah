let btnClrs = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

$(".btn").click(function() {
  let userChosenClr = $(this).attr("id");
  userClickedPattern.push(userChosenClr);
  console.log(userClickedPattern);
});

function nextSequence() {
  let randomNum = Math.floor(Math.random() * 4);
  let randomClr = btnClrs[randomNum];
  gamePattern.push(randomClr);

  $("#" + randomClr).fadeIn(100).fadeOut(100).fadeIn(100);

  let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}
