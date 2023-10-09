"use client";
import React from 'react';

{ /* document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
  alert("Clicked");
}
*/

/** Anonymous Function ver. **/

/* document.querySelector("button").addEventListener("click", function() {
  alert("Clicked");
  });

let numDrumBtn = document.querySelectorAll(".drum").length;

for (let i = 0; i < numDrumBtn; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    // alert("Hello");

    let audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  });

*/
}

export default function drumAudio() {
  useEffect(() => {
    let numDrumBtn = document.querySelectorAll(".drum").length;

    for (let i = 0; i < numDrumBtn; i++) {
      document.querySelectorAll("button")[i].addEventListener("click", function() {
        let audio = new Audio("sounds/tom-1.mp3");
        audio.play();
      });
    }
  }, []);
  return null;
}
