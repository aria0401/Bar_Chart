"use strict";
window.addEventListener("load", start);
const bars = document.querySelectorAll(".bar");
const myArray = [0];

function start() {
  displayBars();
  setTimeout(getArrayOfnumbers, 200);
}

function getRandonNumber() {
  return Math.floor(Math.random() * 32);
}

function getArrayOfnumbers() {
  let newValue = getRandonNumber();
  myArray.push(newValue);
  start();
  if (myArray.length === 40) {
    myArray.shift(myArray.length);
  }
}

function displayBars() {
  for (let i = 0; i < 40; i++) {
    bars[i].style.height = myArray[i] + "px";
  }
}
