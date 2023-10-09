/* document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
  alert("Clicked");
}
*/

/** Anonymous Function ver. **/

// document.querySelector("button").addEventListener("click", function() {
//  alert("Clicked");
//  });

let numDrumBtn = document.querySelectorAll(".drum").length;

for (let i = 0; i < numDrumBtn; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    let audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  });
}
