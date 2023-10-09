const shoppingCart = {
    items: [], // массив товаров
    totalCost: 0,
    addItem(item) {
        const existingItem = this.items.find((e) => e.name === item.name);
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            if (item.name && item.price > 0 && item.quantity > 0) {
                this.items.push({
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity,
                });
            }
        }
        this.updateTotalCost();
    },
    removeItem(itemName) {
        // this.items = this.items.filter(e => e.name !== itemName);
        // const deletedItems = this.items.filter(e => e.name === itemName);
        const index = this.items.findIndex((e) => e.name === itemName);
        if (index !== -1) {
            this.items.splice(index, 1);
            // const deletedItems = this.items.splice(index, 1);
            // this.items = this.items.filter((e, i) => i !== index);
        }
        this.updateTotalCost();
    },
    updateTotalCost() {
        this.totalCost = this.items.reduce(
            (acc, item) => acc + item.quantity * item.price,
            0
        );
    },
};

// shoppingCart.addItem({ name: "Shirt", price: 20, quantity: 2 });
// shoppingCart.addItem({ name: "Pants", price: 30, quantity: 1 });
// console.log(shoppingCart.totalCost); // Output: 70
// shoppingCart.removeItem("Shirt");
// console.log(shoppingCart.totalCost); // Output: 30

const addButton = document.getElementById("add");
const statsButton = document.getElementById("stats");
const productList = document.getElementById("productList");

addButton.onclick = addHandler;
statsButton.onclick = statsHandler;

// addButton.addEventListener('click', addHandler);
addButton.addEventListener("keydown", (e) => {
    // console.log(e);
    if (e.key === "Enter") {
        addHandler;
    }
});

function addHandler() {
    const productName = document.getElementById('productName');
    const price = document.getElementById('price');
    const quantity = document.getElementById('quantity');
    shoppingCart.addItem({
        name: productName.value.trim(),
        price: +price.value,
        quantity: +quantity.value,
    });
    productList.innerHTML = '';
    shoppingCart.items.forEach(e => {
        const li = document.createElement('li');
        li.textContent = `Product name: ${e.name}, Product price: ${e.price},
                         quantity of product: ${e.quantity}`;
        productList.append(li);
    });
}

function statsHandler() {
    // Ассортимент (количество позиций товаров);
    // totalCoast of all products
    // quantity of all products
    // max price of products
    // min price of products
    // avg price of products 
}