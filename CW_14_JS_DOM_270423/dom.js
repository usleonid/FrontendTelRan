console.log(document);
// console.log(document.body.innerHTML);
// document.body.innerHTML = '<h1>Hello world!</h1>';
const div1 = document.getElementById("div1");
div1.style.border = "1px solid black";
console.log(div1.innerHTML);
const a = document.querySelector("#div1");
console.log(a);
const pDiv1 = document.querySelectorAll("#div1 > p");
console.log(pDiv1.length);
for (let i = 0; i < pDiv1.length; i++) {
    pDiv1[i].innerHTML = `<div>new text ${i + 1}</div>`;
}

const children = div1.children; // array of the children of tag
console.log(children.length);
for (let i = 0; i < children.length; i++) {
    children[i].style.color = 'red';
}

const newP1 = document.createElement('p');
const newP1text = document.createTextNode('This text was created by special method');
newP1.appendChild(newP1text);
div1.appendChild(newP1); // insert to the end
// div1.insertBefore(newP1, div1.firstChild); // insert before the given element
div1.removeChild(div1.firstChild.nextElementSibling);
// console.log(div1.firstChild);
// console.log(div1.firstChild.nextElementSibling);
// console.log(div1.firstChild.nextSibling);
