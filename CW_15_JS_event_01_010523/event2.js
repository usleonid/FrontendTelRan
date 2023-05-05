// const button = document.getElementById('button');

// // const nameOne = document.getElementById('name1').value;
// // const nameTwo = document.getElementById('name2').value;

// // const h2person = document.createElement('h2');
// // const h2personTxt = document.createTextNode('Your name is:');
// // h2person.appendChild(h2personTxt);

// // const fullName = document.createElement('p');
// // const fullNameText = document.createTextNode(nameOne + ' ' + nameTwo);
// // fullName.appendChild(fullNameText);

// button.onclick = getValue;
// // const result = document.getElementById('reslist');

// function getValue() {
//     // const nameOne = document.getElementById('name1').value;
//     // const nameTwo = document.getElementById('name2').value;
//     const nameOne = document.getElementById('name1').value;
//     const nameTwo = document.getElementById('name2').value;

//     const h2person = document.createElement('h2');
//     const h2personTxt = document.createTextNode('Your name is:');
//     h2person.appendChild(h2personTxt);

//     const fullName = document.createElement('p');
//     const fullNameText = document.createTextNode(nameOne + ' ' + nameTwo);
//     const result = document.getElementById('reslist');
//     fullName.appendChild(fullNameText);
//     if (!result.children) {
//         result.appendChild(h2person);
//         result.appendChild(fullName);
//     } 
// }

const button = document.getElementById('button');
const p1 = document.createElement('p');
const p2 = document.getElementById('p2');
document.body.appendChild(p1);
button.onclick = getValue;

function getValue() {
    const nameOne = document.getElementById('name1').value;
    const nameTwo = document.getElementById('name2').value;
    const p1Text = `Name1: ${nameOne}, Name2: ${nameTwo}`;
    p1.textContent = p1Text;
    p2.textContent = p1Text;
}