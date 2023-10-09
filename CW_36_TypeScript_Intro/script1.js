var isLoading;
isLoading = true;
var num = 42;
// num = "Hello";
var str = 'Hello world!';
console.log(str);
//Array
var primes1 = [2, 3, 4, 5, 6, 7];
var primes2 = [11, 12, 13];
primes1.push(10);
console.log(primes1);
console.log(primes2);
primes2.forEach(function (n) { return console.log(n); });
var john = ['John', 'Smith', 123456789];
var mary = ['Mary', 'Smith', 987654321];
john[0] = 'Peter';
john.push(18);
john.pop();
console.log(john);
//Funstions
function greeting(name) {
    console.log("Hello ".concat(name));
}
greeting('John');
function greeting2(name) {
    console.log("Hello ".concat(name));
}
greeting2(null);
//Any
var a;
a = 100500;
a = 'Hello';
console.log(a);
var user = 'admin';
var id1 = 1234;
var id2 = '1234';
var peter = {
    id: 'peter@gmail.com',
    password: 'pas1234',
    birtDate: new Date('1993-02-15'),
    zip: 555555,
    hobby: 'football'
};
