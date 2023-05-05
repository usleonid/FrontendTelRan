// int[] arr = new int[5];
// int[] arr = {2, 3, 5, 7};

let arr = [1, 2, 3, 'four', 'five', true];
console.log(typeof arr);
console.log(arr[3]);
console.log(typeof arr[3]);
arr[3] = 4;
console.log(arr.length);
console.log(arr);
printArray(arr);
arr.length = 13;
printArray(arr);


function printArray(arr) {
    console.log('======================');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('======================');
}