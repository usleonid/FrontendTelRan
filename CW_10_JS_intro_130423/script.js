console.log('Hello World!');
let x;
console.log(x);
x = 7;
console.log('x = ' + x);
x = 'bye';
console.log('x = ' + x);
const pi = 3.1415926;
console.log(pi);
// pi = 3; forbidden to define const
let y = x;
console.log('y = ' + y);
let z = 2.71;
// concatenation
console.log('z = ' + z);
console.log('1' + 1);
console.log(5 + 7 + '2');
console.log('1' + (1 + 5));
// parsing with unary operator
console.log(+('1' + (1 + 5)) + 10);

const exp = z;
z = 3;
console.log(`exp = ${exp}, z = ${z}`);

let age = 17;
let vol = age >= 18 ? 42 : 1.5;
console.log(`vol = ${vol}`);
let res = -age;
console.log(`res = ${res}`);
++age;
console.log(`age = ${age}`);
x = 10;
res = x++ + ++x;
console.log(`res = ${res}`);
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
console.log(typeof res);
res = '' + res;
console.log(typeof res);
res = true;
console.log(typeof res);
res = undefined;
console.log(typeof res);
res = null;
console.log(typeof res);

let a = 10;
let b = 15;
let sum = add(a,b);

function add(c,d) {
    console.log(c + d);
    return c + d;
}

console.log(sum);