const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0];
printArray(arr);  // 9, 2, 4, 1, 5, 2, 9, 1, 2, 0
bubbleSort(arr);
printArray(arr); // 0, 1, 1, 2, 2, 2, 4, 5, 9, 9

const persons = [
    new Person(3000, 'Mary', 'Smith', 19),
    new Person(2000, 'Peter', 'Parker', 36),
    new Person(4000, 'Rabindranat', 'Tagor', 97),
    new Person(1000, 'John', 'Smith', 27)
];

printArray(persons);
bubbleSortPersonsByAge(persons);
printArray(persons);


function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
}

function printArray(arr) {
    console.log('======================');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('======================');
}

function bubbleSort(array) {
    let flag = false;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                flag = true;
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
        if (flag) {
            flag = !flag;
        } else {
            break;
        }				
    }
}

function bubbleSortPersonsByAge(array) {
    let flag = false;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j].age > array[j + 1].age) {
                flag = true;
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
        if (flag) {
            flag = !flag;
        } else {
            break;
        }			
    }
}