let container = document.getElementById('container');
let textContainer = document.getElementById('textContainer');
console.log(container);
let containerHoverId = document.getElementById('container-hover');
let leftButton = document.getElementById('left-button');
let rightButton = document.getElementById('right-button');
let slideContaining = document.getElementById('sizeBoxes');
console.log(containerHoverId)

container.addEventListener('mouseover', containerHover)

container.addEventListener('mouseout', containerOutOfHover)

leftButton.addEventListener('click', leftButtonClicked);
rightButton.addEventListener('click', rightButtonClicked);


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
  slideContaining.style.transform = `translateX(-50px * ${i})`
}

function rightButtonClicked() {
  slideContaining.style.transform = `translateX(50px * ${i})`
}


