const arr = [1, 2, 3, 'four', 'five'];
console.log(arr);

// Push
console.log('==== push ====');
let res = arr.push(6, 7, 8); // add the elements to the end of the array and return new length of the array
console.log(arr);
console.log(res);

// Pop
console.log('==== pop ====');
res = arr.pop(); // delete the last element and return the deleting element
console.log(arr);
console.log(res);

// Shift
console.log('==== shift ====');
res = arr.shift(); // delete the first element and return the deleting element
console.log(arr);
console.log(res);

// Unshift
console.log('==== unshift ====');
res = arr.unshift(0, 1, 5, 111, 555); // add the elements to the beginning of the array and return the new length of the array
console.log(arr); 
console.log(res);

const arr1 = [1, 2, 3];
const arr2 = [4, 5];

//Concat
console.log('==== concat ====');
res = arr1.concat(arr2); // add one array to the another and return the new length of the starting array
console.log(arr1); 
console.log(arr2); 
console.log(res);

// Slice
console.log('==== slice ====');
res = arr.slice(2, 6); // take the defined line from the 2 to 6 (not include 6) element and return this part, array is not changing
console.log(arr); 
console.log(res);

// Splice
console.log('==== splice ====');
res = arr.splice(1, 5); // take the line of 5 elements from the 1st element and return this line, array is changing
console.log(arr); 
console.log(res);
