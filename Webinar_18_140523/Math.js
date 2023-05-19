const array = [5, 6, 7, 8, 9]

const minArray = Math.min(...array) // Spread

console.log(minArray);

// function minArr(a,b,c) {
//     let result = a

//     if (b<result) {
//         result = b;
//     }
//     if (c<result) {
//         result = c;
//     }

//     return result;
// }

function minArr(a, b, ...values) { //Rest
    console.log("a", a);
    console.log("b", b);
    console.log("values", values);

    return 0;
}

console.log(minArr(3,4,5,6,8,9));

const max = Math.max(...array);

const abs = Math.abs(5); //5
const abs2 = Math.abs(-5); //5

const pow = Math.pow(10, 3)

// console.log(pow);

const round = Math.round(12.7);

console.log(round);

const floorRound = Math.floor(12.7);

console.log(floorRound);

const ceil = Math.ceil(12.2);

console.log(ceil);