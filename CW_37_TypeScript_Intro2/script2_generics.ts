const arr1 = [1,2,3];
const arr2 = ['one', 'two', 'three'];

// generics return such type as they get
function reverseArray<T>(arr: T[]):T[] {
    return arr.reverse();
}

console.log(reverseArray(arr1));
console.log(reverseArray(arr2));

