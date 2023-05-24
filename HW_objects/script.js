// Создайте объект bankAccount, представляющий банковский счет,
// со свойствами accountNumber, accountHolderName и
// balance. Добавьте способы ввода deposit() и вывода
// денег со счета withdraw(), а также способ проверки баланса checkBalance().

const bankAccount = {
    accountNumber: 1287965873,
    accountHolderName: "Leonid Usyatinskiy",
    balance: 1000,
    deposit: (incomeAmount) => {
        return bankAccount.balance += incomeAmount
    },
    withdraw: (withdrawAmount) => {
        if (bankAccount.balance >= withdrawAmount) {
            return bankAccount.balance -= withdrawAmount
        } else {
            console.log("Insufficient funds");
        }
    },
    checkBalance: function () {
        console.log(`Account balance is ${this.balance}`)
    }
};

bankAccount.checkBalance(); // Account balance is 1000
bankAccount.deposit(500);
bankAccount.checkBalance(); // Account balance is 1500
bankAccount.withdraw(700);
bankAccount.checkBalance(); // Account balance is 800
bankAccount.withdraw(1000); // Insufficient funds

// Необязательно, сложнее, по желанию:
// Создайте объект shoppingCart, представляющий корзину для покупок со
// свойствами товаров и общей стоимостью. Добавьте методы добавления
// товаров в корзину addItem(item), удаления товаров из корзины removeItem(itemName) 
// и расчета общей стоимости товаров в корзине. Свойство "items" должно быть массивом
// объектов, представляющих товары в корзине, причем каждый объект имеет
// свойства для имени, цены и количества. Свойство totalCost
// должно быть суммой цены каждого предмета, умноженной на его количество.

const shoppingCart = {
    items: [],
    totalCost: 0,
    addItem(item) {
        item.total = item.itemQuantity * item.itemPrice;
       if (this.items.length > 0) {
            const indexOfItem = this.items.findIndex(itemInCart => itemInCart.itemId === item.itemId);
            if (indexOfItem !== -1) {
                this.items[indexOfItem].itemQuantity += item.itemQuantity
                this.items[indexOfItem].total += item.total
                // this.totalCost += item.total
                shoppingCart.updateTotalCost(item)
            } else {
                this.items.push(item);
                // this.totalCost += item.total
                shoppingCart.updateTotalCost(item)
            }
        } else {
            this.items.push(item);
            // this.totalCost += item.total
            shoppingCart.updateTotalCost(item)
        }
    },
    removeItem(id, quantity) {
        const indexOfItem = this.items.findIndex(itemInCart => itemInCart.id === id);
        let deleteItem = {}
        if (indexOfItem !== -1) {
            this.items[indexOfItem].quantity -= quantity
            if (this.items[indexOfItem].quantity !== 0) {
                this.items[indexOfItem].total -= this.items[indexOfItem].price * this.items[indexOfItem].quantity
            } else {
                deleteItem = this.items.splice(indexOfItem)
            }
            this.totalCost = 0
            this.items.forEach(item => {
                // this.totalCost += item.total
                shoppingCart.updateTotalCost(item)
            });
        }
    },
    updateTotalCost: (item) => {
        shoppingCart.totalCost += item.total
    },
};





// shoppingCart.addItem({ id: "p-0001", name: "Pants", price: 30, quantity: 1 });
// shoppingCart.addItem({ id: "sh-0001", name: "Shirt", price: 20, quantity: 2 });
// shoppingCart.addItem({ id: "tr-0001", name: "Trousers", price: 50, quantity: 5 });
// shoppingCart.addItem({ id: "sh-0001", name: "Shirt", price: 20, quantity: 2 });
// shoppingCart.addItem({ id: "ts-0001", name: "TShirt", price: 40, quantity: 1 });
// shoppingCart.addItem({ id: "ts-0002", name: "TShirt", price: 50, quantity: 1 });
// shoppingCart.addItem({ id: "p-0001", name: "Pants", price: 30, quantity: 1 });
// console.log(shoppingCart.totalCost); // Output: 70
// shoppingCart.removeItem("sh-0001", 2);
// console.log(shoppingCart.totalCost); // Output: 30

const addButton = document.getElementById("add");
const statsButton = document.getElementById("stats");
const productList = document.getElementById("productList");
const stats = document.getElementById("statsContainer");
const products = document.getElementById("products");
// const field = document.querySelector("input");

addButton.onclick = addHandler;
statsButton.onclick = statsHandler;

// addButton.addEventListener('click', addHandler);
addButton.addEventListener("keydown", (e) => {
    // console.log(e);
    if (e.key === "Enter") {
        addHandler;
    }
});


// field.addEventListener("keydown", (e) => {
//     console.log(e);
//     if (e.key === "Enter") {
//         addHandler;
//     }
// });



function addHandler() {
    const productId = document.getElementById('productId');
    const productName = document.getElementById('productName');
    const price = document.getElementById('price');
    const quantity = document.getElementById('quantity');
    products.innerHTML = '';
    const cartH1 = createInfoElement("Contents of your cart:", 'h1');
    products.appendChild(cartH1);
    shoppingCart.addItem({
        itemId: productId.value.trim(),
        itemName: productName.value.trim(),
        itemPrice: +price.value,
        itemQuantity: +quantity.value,
    });
    productList.innerHTML = '';
    shoppingCart.items.forEach(e => {
        const li = document.createElement('li');
        li.textContent = `Product ID: ${e.itemId}, Product name: ${e.itemName}, Product price: ${e.itemPrice},
                         quantity of product: ${e.itemQuantity}, Amount of product: ${e.total}`;
        productList.append(li);
    });
}

function statsHandler() {
    stats.innerHTML = '';
    const statsH1 = createInfoElement("Information about your cart:", 'h1');
    stats.appendChild(statsH1);
    // Ассортимент (количество позиций товаров);
    let totalCart = shoppingCart.items.length;
    const liTotalCart = createInfoElement(`Total positions in the cart: ${totalCart}`, 'h4');
    // totalCoast of all products
    let totalAmountOfCart = shoppingCart.totalCost;
    const liAmountOfCart = createInfoElement(`Total amount of your cart is: ${totalAmountOfCart}`, 'h4')
    // quantity of all products
    let quantityAllProducts = shoppingCart.items.reduce(
        (acc, item) => acc + item.itemQuantity,
        0
    ); 
    const liTotalQuantity = createInfoElement(`Total quantity of all goods in your cart is: ${quantityAllProducts}`, 'h4')
    // max price of products
    let maxPrice = shoppingCart.items.sort((a, b) => a.itemPrice - b.itemPrice)[shoppingCart.items.length-1].itemPrice;
    const liMax = createInfoElement(`Max price of goods in your cart is: ${maxPrice}`, 'h4')
    // min price of products
    // avg price of products 

    stats.append(liTotalCart, liAmountOfCart, liTotalQuantity, liMax);
    // if (stats.firstElementChild.nextElementSibling) {
    //     stats.replaceChild(divStats, stats.firstElementChild.nextElementSibling);
    // } else {
    //     stats.appendChild(divStats);
    // }
}

function createInfoElement(content, tag) {
    const element = document.createElement(tag);
    const text = document.createTextNode(content);
    element.appendChild(text);
    return element;
}