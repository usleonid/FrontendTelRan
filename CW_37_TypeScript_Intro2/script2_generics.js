var arr1 = [1, 2, 3];
var arr2 = ['one', 'two', 'three'];
// generics return such type as they get
function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray(arr1));
console.log(reverseArray(arr2));
