interface Address {
    city: string,
    street: string,
    building: number
}

interface Person {
    id: number,
    firstName: string,
    lastName: string,
    address: Address,
    fullname: (greeting: string) => string
}

const john:Person = {
    id: 1000,
    firstName: 'John',
    lastName: 'Smith',
    address: {
        city: 'Rehovot',
        street: 'Plaut',
        building: 10
    },
    fullname(greeting) {
        return `${greeting} ${this.firstName} ${this.lastName}`
    },
}