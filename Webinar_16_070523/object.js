var person = {
    name: 'Inna',
    'year': 1990,
    family: ['Elena', 'Igor'],
    car: {
        name: 'Ford',
        year: 2010
    },
    calculateAge: function(carName, carYear) {
        const currentYear = new Date().getFullYear()
        return currentYear - this.year
    }
}

const isYear = true

console.log(person[isYear ? 'year' : 'name']);

console.log(person.calculateAge());

console.log(person.calculateAge.bind(person.car)("Ford", 2020));

console.log(person.calculateAge.call(person.car, "Ford", 2020));

console.log(person.calculateAge.apply(person.car, ["Ford", 2020]));