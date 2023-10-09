const h1 = document.querySelector('h1');
const button = document.querySelector('button');
const input = document.querySelector('input');


button.addEventListener("click", function () {
    h1.textContent = input.value;
})

console.log('From root of script', this);

const mouseEnterHandler = function () {
    console.log('From handler', this);
    this.style.color = 'red';
    this.style.backgroundColor = 'black';
}

h1.addEventListener("mouseenter", mouseEnterHandler)

h1.addEventListener("mouseleave", function () {
    this.style.color = 'black';
    this.style.backgroundColor = 'transparent';
})