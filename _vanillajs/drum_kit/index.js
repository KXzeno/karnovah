
/* document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
  alert("Clicked");
}
*/

/** Anonymous Function ver. **/

// document.querySelector("button").addEventListener("click", function() {
//  alert("Clicked");
//  });

// Detects Btn Press

let numDrumBtn = document.querySelectorAll(".drum").length;

for (let i = 0; i < numDrumBtn; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {

    let buttonInnerHTML = this.innerHTML;

    soundEffect(buttonInnerHTML);

  });
}

document.addEventListener("keydown", function(event) {

  soundEffect(event.key);

});

function soundEffect(key) {

  switch (key) {

    case 'w':
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case 'a':
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case 's':
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case 'd':
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case 'j':
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case 'k':
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case 'l':
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default: console.log(buttonInnerHTML);

  }

}
