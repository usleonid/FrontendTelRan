// const div = document.getElementById('playground');
// const p = document.getElementsByClassName('text');
// const h1 = document.getElementsByTagName('h1');


// console.log(div);
// console.log(p);  // return the array HTMLCollection with all elements of this class
// console.log(h1); // return the array HTMLCollection with all elements of this tag


// class -> .className
// id -> #id
// tag -> tagName

const div = document.querySelector('#playground');
const p = document.querySelector('.text');
const h1 = document.querySelector('h1');
const span = document.querySelector('div#playground span')
const ul = document.querySelector('#playground > div > ul')


const pAll = document.querySelectorAll('.text');

console.log(div);
console.log(p);  
console.log(h1); 
console.log(pAll);
console.log(span);
console.log(ul);

span.textContent = 'New text'

// div.innerHTML = '<p style="color: red">From InnerHtml</p>'

const input = document.querySelector('input');
input.value = 'default value';
const value = input.value;
input.getAttribute('name');
input.setAttribute('type', 'password');

p[0].classList.add('blue')

p[0].classList.remove('blue')
