let btnClrs = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false; // tracker

$(document).keydown(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {
  let userChosenClr = $(this).attr("id");
  userClickedPattern.push(userChosenClr);

  playSound(userChosenClr);
  animatePress(userChosenClr);

  checkAns(userClickedPattern.length - 1);
});


function checkAns(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $(document.body).addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function() {
      $(document.body).removeClass("game-over");
    }, 200);

    startOver();
  }
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  let randomNum = Math.floor(Math.random() * 4);
  let randomChosenClr = btnClrs[randomNum];
  gamePattern.push(randomChosenClr);

  $("#" + randomChosenClr).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenClr);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
