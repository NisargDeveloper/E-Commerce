let container = document.getElementById('container');
let textContainer = document.getElementById('textContainer');
console.log(container);
let containerHoverId = document.getElementById('container-hover');
let leftButton = document.getElementById('left-button');
let rightButton = document.getElementById('right-button');
let slideContaining = document.getElementById('sizeBoxes');
let addToBag = document.getElementById('bagButton');
let addToBag1 = document.getElementById('bagButton1');
let addToBag2= document.getElementById('bagButton2');
let addToBag3 = document.getElementById('bagButton3');
// const output = require('../../../app');
let cartSpan = document.getElementById('cart-added');

let numberOfItems = 0;


let container1 = document.getElementById('container1');
let textContainer1 = document.getElementById('textContainer1');
// console.log(container);
let containerHoverId1 = document.getElementById('container-hover1');
let leftButton1 = document.getElementById('left-button1');
let rightButton1 = document.getElementById('right-button1');
let slideContaining1 = document.getElementById('sizeBoxes1');

// console.log(container1);

let container2 = document.getElementById('container2');
let textContainer2 = document.getElementById('textContainer2');
// console.log(container);
let containerHoverId2 = document.getElementById('container-hover2');
let leftButton2 = document.getElementById('left-button2');
let rightButton2 = document.getElementById('right-button2');
let slideContaining2 = document.getElementById('sizeBoxes2');


let container3 = document.getElementById('container3');
let textContainer3 = document.getElementById('textContainer3');
// console.log(container);
let containerHoverId3 = document.getElementById('container-hover3');
let leftButton3 = document.getElementById('left-button3');
let rightButton3 = document.getElementById('right-button3');
let slideContaining3 = document.getElementById('sizeBoxes3');



// let container = document.getElementById('container');
// let textContainer = document.getElementById('textContainer');
// console.log(container);
// let containerHoverId = document.getElementById('container-hover');
// let leftButton = document.getElementById('left-button');
// let rightButton = document.getElementById('right-button');
// let slideContaining = document.getElementById('sizeBoxes');

// let container = document.getElementById('container');
// let textContainer = document.getElementById('textContainer');
// console.log(container);
// let containerHoverId = document.getElementById('container-hover');
// let leftButton = document.getElementById('left-button');
// let rightButton = document.getElementById('right-button');
// let slideContaining = document.getElementById('sizeBoxes');


// console.log(containerHoverId)

container.addEventListener('mouseover', containerHover)

container.addEventListener('mouseout', containerOutOfHover)

leftButton.addEventListener('click', leftButtonClicked);
rightButton.addEventListener('click', rightButtonClicked);
addToBag.addEventListener('click', addToBagfun);
addToBag1.addEventListener('click', addToBag1fun);
addToBag2.addEventListener('click', addToBag2fun);
addToBag3.addEventListener('click', addToBag3fun);

// const output = require('../../../app');

function addToBagfun() {
  numberOfItems = numberOfItems+1;
  cartSpan.innerText = numberOfItems;
  getInfo();
}

function addToBag1fun() {
  numberOfItems = numberOfItems+1;
  cartSpan.innerText = numberOfItems;

}

function addToBag2fun() {
  numberOfItems = numberOfItems+1;
  cartSpan.innerText = numberOfItems;

}

function addToBag3fun() {
  numberOfItems = numberOfItems+1;
  cartSpan.innerText = numberOfItems;

}





function containerHover() {
  textContainer.style.display = "none";
  containerHoverId.style.display = "flex";
  textContainer.classList.add('textHover');
}

function containerOutOfHover() {
  textContainer.style.display = "block";
  containerHoverId.style.display = "none";
}
let i = 0;
function leftButtonClicked() {
  console.log(output);
  slideContaining.style.transform = `translateX(-50px * ${i})`
}

function rightButtonClicked() {
  slideContaining.style.transform = `translateX(50px * ${i})`
}

//Second Container

container1.addEventListener('mouseover', containerHover1)

container1.addEventListener('mouseout', containerOutOfHover1)

leftButton1.addEventListener('click', leftButtonClicked1);
rightButton1.addEventListener('click', rightButtonClicked1);

// const output = require('../../../app');
function containerHover1() {
  textContainer1.style.display = "none";
  containerHoverId1.style.display = "flex";
  textContainer1.classList.add('textHover');
}

function containerOutOfHover1() {
  textContainer1.style.display = "block";
  containerHoverId1.style.display = "none";
}
let i1 = 0;
function leftButtonClicked1() {
  console.log(output);
  slideContaining.style.transform = `translateX(-50px * ${i1})`
}

function rightButtonClicked1() {
  slideContaining.style.transform = `translateX(50px * ${i1})`
}

// Container 3

container2.addEventListener('mouseover', containerHover2)

container2.addEventListener('mouseout', containerOutOfHover2)

leftButton2.addEventListener('click', leftButtonClicked2);
rightButton2.addEventListener('click', rightButtonClicked2);

// const output = require('../../../app');
function containerHover2() {
  textContainer2.style.display = "none";
  containerHoverId2.style.display = "flex";
  textContainer2.classList.add('textHover');
}

function containerOutOfHover2() {
  textContainer2.style.display = "block";
  containerHoverId2.style.display = "none";
}
let i2 = 0;
function leftButtonClicked2() {
  console.log(output);
  slideContaining.style.transform = `translateX(-50px * ${i2})`
}

function rightButtonClicked2() {
  slideContaining.style.transform = `translateX(50px * ${i2})`
}

// Container4

container3.addEventListener('mouseover', containerHover3)

container3.addEventListener('mouseout', containerOutOfHover3)

leftButton3.addEventListener('click', leftButtonClicked3);
rightButton3.addEventListener('click', rightButtonClicked3);

// const output = require('../../../app');
function containerHover3() {
  textContainer3.style.display = "none";
  containerHoverId3.style.display = "flex";
  textContainer3.classList.add('textHover');
}

function containerOutOfHover3() {
  textContainer3.style.display = "block";
  containerHoverId3.style.display = "none";
}
let i3 = 0;
function leftButtonClicked3() {
  console.log(output);
  slideContaining.style.transform = `translateX(-50px * ${i3})`
}

function rightButtonClicked3() {
  slideContaining.style.transform = `translateX(50px * ${i3})`
  getInfo();
}


let cartAdded = document.getElementById('cart-added');
let brandHeading = document.getElementById('brandHeading');
const baseUrl = 'http://localhost:8081/assets/man/man.html'
async function getInfo(e) {
  e.preventDefault(); 
  const res = await fetch(baseUrl, 
    {
      method: 'GET'
    })

    console.log(res);
}

console.log(cartAdded);

// module.exports = leftButton;



