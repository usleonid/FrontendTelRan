// Arrays operators

const array = ["ford", "mazda", "bmw", "chevrolet"];

array.push("mercedes"); // add to end
array.pop(); // remove last element

const arrayMapped = array.map((car) => car.toUpperCase());

console.log(arrayMapped);

array.forEach((car) => {
  console.log(car);
});

const arrayObj = [
  { name: "Vasya", age: 30 },
  { name: "Natasha", age: 25 },
  { name: "Sveta", age: 32 },
];

const ageSummary = arrayObj.reduce((acc, item) => acc + item.age, 100);

console.log("ageSummary", ageSummary);

const discount = 200;

let basket = [
  { name: "Tshirt", price: 50, quantity: 6 },
  { name: "Phone", price: 2000, quantity: 3 },
  { name: "Computer", price: 2500, quantity: 2 },
];

const basketSummary = basket.reduce(
  (acc, item) => acc + item.price * item.quantity,
  -discount
);

console.log("basketSummary", basketSummary);

const arrayPrice = basket.map((item) => item.price);

console.log("arrayPrice", arrayPrice);

Math.min(...arrayPrice);

Math.min(...basket.map((item) => item.price)); // !!!!

const arrayObjs = [
  { width: 100, height: 100, color: "red" },
  { width: 200, height: 200, color: "blue" },
];

const arrayDivs = arrayObjs.map((obj) => {
  const div = document.createElement("div");
  div.style.width = obj.width + "px";
  div.style.height = obj.height + "px";
  div.style.background = obj.color;
  return div;
});

// document.getElementById('container').append(...arrayDivs)

arrayDivs.forEach((div) => {
  document.getElementById("container").insertAdjacentElement("afterbegin", div);
});

console.log(arrayDivs);

const temp = [...basket];

const basketSorted = basket.sort((item1, item2) => item1.price - item2.price);

basket = temp;

console.log("basketSorted", basketSorted);

const basketFiltered = basket.filter((item) => item.price > 1000);

console.log("basketFiltered", basketFiltered);

console.log("basket", basket);

const basketFind = basket.find((item) => item.price > 1000);

console.log("basketFind", basketFind);

const basketFindIndex = basket.findIndex((item) => item.price > 1000);

console.log("basketFindIndex", basketFindIndex);

function myFunc(a, b, ...values) {
  console.log("a", a);             // 10
  console.log("b", b);             // 20
  console.log("values", values);   // [30, 40, 50, 60]
}

myFunc(10, 20, 30, 40, 50, 60);

const arrayNum = [1, 2, 3];

const container$ = document.getElementById('container')

container$.getAttribute('id')
container$.setAttribute('id', 'newId')
container$.removeAttribute('id')

console.log(container$);

container$.classList.add('newClass')   //add class
container$.classList.remove('oldClass')   //remove class
container$.classList.contains('myClass')   //contain class or not

container$.setAttribute('data-box', true)
container$.setAttribute('data-tag', 'div')
container$.setAttribute('data-container', 'test')

container$.dataset  // obj {box: true, ...}
