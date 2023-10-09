const images = [
    './Images/Rouen_Cathedral_1.jpg',
    './Images/Rouen_Cathedral_2.jpg',
    './Images/Rouen_Cathedral_3.jpg',
    './Images/Rouen_Cathedral_4.jpg',
    './Images/Rouen_Cathedral_5.jpg',
    './Images/Rouen_Cathedral_6.jpg'
];

const buttonPrev = document.getElementById('buttonPrev');
const buttonNext = document.getElementById('buttonNext');
let index = 0;

buttonNext.onclick = nextHandler;
buttonPrev.onclick = prevHandler;

function nextHandler() {
    index++;
    if (index === images.length) {
        index = 0;
    }
    picture.src = images[index];
}

function prevHandler() {
    index--;
    if (index < 0) {
        index = images.length-1;
    }
    picture.src = images[index];
}