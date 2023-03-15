/* Declare variables below to save the different sections (divs) of your story*/

let title = document.querySelector(".title");
let storyOpening = document.querySelector(".story-opening");
let optionTwoQuickEnd = document.querySelector(".option-two-quick-ending");
let optionOne = document.querySelector(".option-one");
let optionOneEnd = document.querySelector(".option-one-ending");
let optionTwoEnd = document.querySelector(".option-two-ending");
let blackImage = document.querySelector(".black-image");
let blackImageWhiteWords = document.querySelector(".black-image-with-words");
let birthdayPartyImage = document.querySelector(".birthday-party");
let cheeringChildrenImage = document.querySelector(".cheering-children");
let happyEndingText = document.querySelector(".happy-ending-text");



let quickEndButtonRestart = document.querySelector(".quick-end-button-restart");
let optionOneButtonStart = document.querySelector(".option-one-button-start");
let optionTwoButtonStart = document.querySelector(".option-two-button-start");
let optionOneButtonUp = document.querySelector(".option-one-button-up");
let optionTwoButtonUp = document.querySelector(".option-two-button-up");
















title.onclick = function() {
  storyOpening.style.display = "block";
  title.style.display = "none";

};

optionOneButtonStart.onclick = function() {
  optionOne.style.display = "block";
  storyOpening.style.display = "none";

};

optionTwoButtonStart.onclick = function() {
  optionTwoQuickEnd.style.display = "block";
  storyOpening.style.display = "none";

};

optionOneButtonUp.onclick = function() {
  optionOneEnd.style.display = "block";
  optionOne.style.display = "none";

};

optionTwoButtonUp.onclick = function() {
  optionTwoEnd.style.display = "block";
  optionOne.style.display = "none";

};

quickEndButtonRestart.onclick = function() {
  storyOpening.style.display = "block";
  optionTwoQuickEnd.style.display = "none";

};

blackImage.onmouseover = function() {
  blackImageWhiteWords.style.display = "inline";
  blackImage.style.display = "none";

};

blackImageWhiteWords.onmouseout = function() {
  blackImage.style.display = "inline";
  blackImageWhiteWords.style.display = "none";

};

birthdayPartyImage.onclick = function() {
  cheeringChildrenImage.style.display = "inline";
  birthdayPartyImage.style.display = "none";
  happyEndingText. innerHTML = "Woahhh look, everybody is so happy!! Congratulations, you got the good ending!";

};








