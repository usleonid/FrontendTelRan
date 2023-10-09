let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1;

arr3[0] = 100;
console.log(arr3);
console.log(arr1);

arr3 = [...arr1]; //spread operator
arr3[0] = 1000;
console.log(arr3);
console.log(arr1);

arr1 = [1, 2, 3];
arr2 = [4, 5, 6];
arr3 = [...arr1, ...arr2];
console.log(arr3);
console.log(arr1);
console.log(arr2);

arr3 = [1, 2, 3, 4, 5, 6]

let [first, second, ...other] = arr3;
first = 100;
console.log(first);
console.log(second);
console.log(other);
console.log(arr3);

console.log("==========FUNCTIONS===========");

console.log(multiply(4, 5));

function multiply(a, b) {
    return a*b;
}

console.log(multiply(5, 7));

// const multiplyArrow = (a ,b) => a * b;

// console.log(multiplyArrow(5, 7)); // will not work

const multiplyArrow = (a ,b) => {
    return a * b;
}

const obj = {
    userName: 'John',
    sayHello: function () {
        console.log(this);
        console.log(`Hello ${this.userName}`);
    }
}

obj.sayHello();

const objArrow = {
    userName: 'Fred',
    sayHello: () => {
        console.log(this);
        console.log(`Hello ${objArrow.userName}`);
    }
}

objArrow.sayHello();