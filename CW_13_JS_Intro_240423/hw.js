const library = [];
//isbn;title;author;year
let inputData = prompt('Enter book data separate by ";"');
while (inputData){
    //TODO add to library only unique book
    const book = inputData.split(';', 4);
    for (let i = 0; i < book.length; i++) {
        book[i].trim();
    }
    if (findBook(library,book[0]) === -1 && book.length === 4) {
        library.push(new Book(book[0],book[1],book[2],book[3]));
    } else {
        alert(`This book is already in library under the index ${findBook(library,book[0])}`);
    }
    inputData = prompt('Enter book data separate by ";"');
}
printLibrary(library);

function printLibrary(library){
    if (library.length) {
        // for (let i = 0; i < library.length; i++) {
        //     console.log(library[i].toString());
        // }
        library.forEach(book => {
            console.log(book.toString());            
        });
     } else {
            console.log('Library is empty');
        }
    }

function findBook(library, isbn) {
    //TODO return index if book exists, or -1
    const index = library.findIndex(book => {
        return book.isbn == isbn;
    });
    console.log(index);
    return index;
}

function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year of publishing: ${this.year}`
    }
}