let isLoading: boolean;
isLoading = true;
let num: number = 42;
// num = "Hello";
let str = 'Hello world!'
console.log(str);
//Array
const primes1:number[] = [2,3,4,5,6,7];
const primes2:Array<number> = [11,12,13];
primes1.push(10);
console.log(primes1);
console.log(primes2);
primes2.forEach(n=>console.log(n));
const john:[string,string,number] = ['John','Smith',123456789];
const mary:(string|number)[] = ['Mary', 'Smith', 987654321];
john[0]='Peter';
john.push(18);
john.pop();
console.log(john);
//Funstions
function greeting(name:string) {
    console.log(`Hello ${name}`);
}
greeting('John');
function greeting2(name) {
    console.log(`Hello ${name}`);
}
greeting2(null);
//Any
let a: any;
a = 100500;
a = 'Hello';
console.log(a);
//Type
type Login = string;
let user:Login = 'admin'
type ID = string|number;
let id1:ID = 1234;
let id2:ID = '1234';
type User = {
    id:ID,
    password:string,
    birtDate?:Date,
    [key: string]:ID|Date|boolean|undefined,
}

const peter: User = {
    id: 'peter@gmail.com',
    password: 'pas1234',
    // birtDate: new Date('1993-02-15'),
    zip:555555,
    hobby:'football',
    key:false,
}

const einstein: User = {
    id: "010101010",
    password: '0101',
    birtDate: new Date('1879-03-14'),
}

type Area = {
    width: number,
    depth: number,
    area:()=>number
}

type Height = {
    height: number
}

type Wardrobe = Area & Height;

let aron: Wardrobe = {
    width: 10,
    depth: 10,
    area: function () {
        return this.depth * this.width
    },
    height: 20
}
