// const { blob } = require("stream/consumers");
// const http = require('http');
console.log("Script Js ran successfully")

let leftButton = document.getElementById("leftButton");
let rightButton = document.getElementById("rightButton");
let collectionOfImages = document.getElementById("collectionOfImages");

let slides = Array.from(collectionOfImages.children);
let nextSlide;
const track = document.querySelector
console.log(leftButton);
console.log(rightButton);

leftButton.addEventListener("click", leftButtonClicked);
rightButton.addEventListener("click", rightButtonClicked);

var count = 0;
var count2 = 0;
function leftButtonClicked() {
  count2 = count2+ 1;
  const currentSlide = document.getElementsByClassName("current_slides");
  if(collectionOfImages.style.transform <='translate(0px)') {
    count2 = 0;
    count = 0;
    console.log(count + "count");
    console.log(count2 + "count2");
    collectionOfImages.style.transform = 'translate(0px)'
  } else {
    console.log(count + "count");
    console.log(count2 + "count2");
  nextSlide = currentSlide[0].nextElementSibling;
  console.log(nextSlide);
  const amountToMove2 = nextSlide.width;
  collectionOfImages.style.transform = 'translate(' + 4*(amountToMove2*count2) + 'px)';
 // currentSlide.classList.remove('current_slides');
  console.log(slides)
  }  
}

function rightButtonClicked() {
  if(collectionOfImages.style.transform <= 'translate(-' + collectionOfImages.clientWidth*2
  + ')'){
    count = 1;
    count2 = 0;
    const amountToMove = 100;
    console.log("It reached the hell")
    collectionOfImages.style.transform = 'translate(-' + 4*(amountToMove*count) + 'px)';
  } else {
    console.log("Reached Else Loop")
    count = count + 1;
    const currentSlide = document.getElementsByClassName("current_slides");
    nextSlide = currentSlide[0].nextElementSibling;
    const amountToMove = 100;
    collectionOfImages.style.transform = 'translate(-' + 4*(amountToMove*count) + 'px)';
    console.log(collectionOfImages.style.transform)
    console.log(slides)
  }
}

