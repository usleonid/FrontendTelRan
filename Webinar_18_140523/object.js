// number, string, boolean, null, undefined - primitive types

var car = {
    name: 'Ford',
    "year": 2015,
    owner: {
        name: 'Alex'
    }
}

console.log(car);

function Car(name, year) {
    this.name = name
    this.year = year
}

Car.prototype.getAge = function () {
    return new Date().getFullYear() - this.year;
}

var ford = new Car('Ford', 2017)
var bmw = new Car('Bmw', 2015)

console.log(ford);
console.log(bmw);

var focus = Object.create(
    // {},
    ford,
    {
        model: {
            value: "Focus",
            enumerable: true,
            configurable: true,
            writable: false
        },
        distance: {
            value: 120500,
            enumerable: true,
            configurable: true,
            writable: true
        }
    }
);

console.log(focus);

