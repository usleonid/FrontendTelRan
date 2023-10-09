// Number

let x = 10.7;

let res = Math.floor(x); // always round to the less side
console.log(res);

res = Math.round(x); // round the number for mathematical logic
console.log(x);

res = Math.trunc(x); // delete all after the "."
console.log(x);

res = Math.PI; // the number PI
console.log(res);

res = Math.random(); // random number from 0 to 1 not included 1
console.log(res);

// String

x = 'Two beer or not two beer            ';

res = x.trim(); // delete empty slots in the string
console.log(res);

res = x.toLowerCase(); // all input correct to lower case
console.log(res);

res = x.toUpperCase(); // all to uppercase
console.log();

res = x.split(' ');
console.log(res);

res = x.length;
console.log(res);

res = x.charAt(2); // identity to res = x[2]
console.log(res);

res = x.indexOf('ee');
console.log(res);

let y = 'TWO people';
res = y.startsWith('T'); //check the beginning of the string
console.log(res);

res = y.substring(4, 8); // take the line of the text from 4 element to 8 not included 8
console.log(res);

res = y.slice(4, 8);
console.log(res);

