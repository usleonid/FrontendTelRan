const greeting = name => {
    console.log(`Hello ${name}`);
}

// equal to:
// function greeting(name) {
//     console.log(`Hello ${name}`);
// }

console.log(typeof greeting);
console.log(greeting);
const fn = greeting;
console.log(fn);

greeting('John');
fn('Peter');

console.log(greeting === fn);

let res = pow2(3);

function pow2(x) {
    return x*x;
}

// Math.pow(3,2);

function factorial(x) {
    let res = 1;
    for (let i = 2; i <= x; i++) {
        res = res * i;
    }
    return res;
}