function getFiveAfterSevenSeconds(params) {
    setTimeout(() => {return 5}, 7000) //get the function and the interval after should run the function
}

const result = getFiveAfterSevenSeconds();
console.log(result); // show undefined because the synchronized process not include the promise of the action of the function with timeout

// to work with asynchronized queries use promises
let promise1 = new Promise(function (resolved, reject) { // if all run correctly return param method resolved, if not correctly - reject
    setTimeout(() => {
        resolved(5);
        reject(new Error("error 404"));
    }, 7000)
});

console.log(promise1); // show Promise

promise1
    .then(value => console.log(value)) // show the value of the resolve in promise after the finished the function (in this case setTimeout)

let promise2 = new Promise(function (resolved, reject) { // if all run correctly return param method resolved, if not correctly - reject
    setTimeout(() => {
        reject(new Error("error 404"));
    }, 7000)
});

promise2
    .catch(err => console.log(err)); // show the value of the reject in promise