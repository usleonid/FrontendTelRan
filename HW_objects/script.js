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

// sh

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
        item.total = item.quantity * item.price;
       if (this.items.length > 0) {
            const indexOfItem = this.items.findIndex(itemInCart => itemInCart.id === item.id);
            if (indexOfItem !== -1) {
                this.items[indexOfItem].quantity += item.quantity
                this.items[indexOfItem].total += item.total
                this.totalCost += item.total
            } else {
                this.items.push(item);
                this.totalCost += item.total
            }
        } else {
            this.items.push(item);
            this.totalCost += item.total
        }
    },
    removeItem(id, quantity) {
        const indexOfItem = this.items.findIndex(itemInCart => itemInCart.id === id);
        if (indexOfItem !== -1) {
            this.items[indexOfItem].quantity -= quantity
            if (this.items[indexOfItem].quantity !== 0) {
                this.items[indexOfItem].total -= this.items[indexOfItem].price * this.items[indexOfItem].quantity
            } else {
                
            }
            this.totalCost -= this.items[indexOfItem].price * quantity
        }
    },
    updateTotalCost() {
        
    },
};





shoppingCart.addItem({ id: "sh-0001", name: "Shirt", price: 20, quantity: 2 });
shoppingCart.addItem({ id: "p-0001", name: "Pants", price: 30, quantity: 1 });
shoppingCart.addItem({ id: "sh-0001", name: "Shirt", price: 20, quantity: 2 });
console.log(shoppingCart.totalCost); // Output: 70
// shoppingCart.removeItem("Shirt");
// console.log(shoppingCart.totalCost); // Output: 30