let btnClrs = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

let started = false; // tracker

$(".btn").click(function() {
  let userChosenClr = $(this).attr("id");
  userClickedPattern.push(userChosenClr);
  console.log(userClickedPattern);
  playSound(userChosenClr);
  checkAns(userClickedPattern.length - 1);
});

$(document).keydown(function() {
  if (!started) {
    $("level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function checkAns(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
  } else {
    console.log("wrong");

    let wrong = new Audio("sounds/wrong.mp3");
    wrong.play();

    $(document.body).addClass("game-over");

    setTimeout(function() {
      $(document.body).removeClass("game-over");
    }, 200);
  }

  if(userClickedPattern.length === gamePattern.length) {
    setTimeout(function() {

    }, 1000);
    nextSequence();
    userClickedPattern = [];
  }
}

function nextSequence() {
  level++;
  $("#level-title").text("level " + level);

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

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

let level = 0;

