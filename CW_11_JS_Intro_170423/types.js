let x = 5;
console.log(x);
console.log(typeof x);

x = '' + x; // String(x)
console.log(x);
console.log(typeof x);

x = '42';
console.log(x);
console.log(typeof x);

x = +x; // Number(x)
console.log(x);
console.log(typeof x);

x = 10;
x = !!x // Boolean(x)
console.log(x);
console.log(typeof x);