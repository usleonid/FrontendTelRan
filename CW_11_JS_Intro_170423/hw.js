const primes = [2, 3, 5, 7, 11, 13, 17, 19];

printArray(primes);

reverseArray(primes); 
printArray(primes); // 19, 17, 13

let index = search(primes, 13);
console.log(index); // 2

index = search(primes, 1);
console.log(index); // -1


function printArray(arr) {
    console.log('======================');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('======================');
}

function reverseArray(arr) {
    if (arr.length > 0) {
        for (let i = 0; i < arr.length/2; i++) {
            let s = arr[i];
            arr[i] = arr[arr.length-1-i];
            arr[arr.length-1-i] = s;
        }
    } else {
        console.log("Array doesn't contain any elements");
    }
}

function search(arr, value) {
    let ind = -1;
    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === value) {
                ind = i;
                break;
            } else if (arr[i] == value) {
                ind = i;
                let valtype = typeof(value);
                let indtype = typeof(arr[i]);
                console.log (`The value ${value} have type ${valtype} and the element ${arr[i]} have type ${indtype}`);
                break;
            }
        }
        if (ind == -1) console.log(`Array does not contain the value ${value}`);
        return ind;
    }  else {
        console.log("Array doesn't contain any elements");
        return ind;
    }
}