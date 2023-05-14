const arr = ['one', 'two', 'threE', 'eight', 'tHree', 'three', 'six'];
let res = arr.indexOf('three');
console.log(`res(index of element 'three') = ${res}`);
console.log('============');

res = arr.includes('nine');
console.log(`res(есть или нет элемент в массиве) = ${res}`);
console.log('============');

res = arr.findIndex((x, i) => i > 2 && x.toLowerCase() === 'three');
console.log(`res(первый элемент, подходящий под наши условия) = ${res}`);
console.log('============');

res = arr.findIndex(predicateLength3);
function predicateLength3(x, i) {
    return i >= 2 && x.length === 3;
}
console.log(`res(первый элемент, подходящий под наши условия) = ${res}`);
console.log('============');

const persons = [
    {
        userName: 'Peter',
        age: 23
    },
    {
        userName: 'John',
        age: 28
    },
    {
        userName: 'Tigran',
        age: 26
    },
    {
        userName: 'Rabindranat',
        age: 23
    }
];

res = persons.findIndex((person, index) => index > 0 && person.age > 25);
console.log(`res(первый элемент, подходящий под наши условия) = ${res}`);
console.log('============');

persons.forEach((person, index) => 
console.log(`${index + 1}. Name: ${person.userName}, Age: ${person.age}`));
console.log(`res(Выполнение определённого текста для каждого элемента массива) = ${res}`);
console.log('============');

res = persons.filter((p) => p.age < 25 && p.userName.length > 5);
console.log(res);

res = persons.reduce((accum, item) => accum + item.age, 0);
console.log(res);