// const calculator = function(action, ...args) {
//     const res = action(...args);
//     return res;
// }

// const calculator = function (action) {
//     return function (...args) {
//         const res = action(...args);
//         return res
//     };
// };

//High ordered function, Closure
const calculator =
  (action) =>
  (...args) =>
    action(...args);

// let res = calculator((a,b) => a + b)(2, 3);
// console.log(res);

// let res = calculator((a,b) => a * b, 2, 3);
// console.log(res);

const sum = calculator((a, b) => a + b);
res = sum(10, 20);
console.log(res);
