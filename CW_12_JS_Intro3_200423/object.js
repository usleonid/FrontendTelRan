const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 28,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(typeof person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());
console.log(person);

person.age = 29;
console.log(person.age);

const peter = {
    firstName: 'Peter',
    lastName: 'Jackson',
    age: 34
}

console.log(person);
console.log(peter);

peter.fullName = function () {
    return `${this.firstName} ${this.lastName}`
}

console.log(peter.fullName());
console.log(peter.id);
peter['id'] = 2000;