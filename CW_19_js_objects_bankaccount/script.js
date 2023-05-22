const bankAccount = {
    accountNumber: 1287965873,
    accountHolderName: "Leonid Usyatinskiy",
    balance: 1000,
    deposit: (incomeAmount) => {
        alert("Your deposit was added to your account balance.")
        return bankAccount.balance += incomeAmount
    },
    withdraw: (withdrawAmount) => {
        if (bankAccount.balance >= withdrawAmount) {
            alert("Your withdraw amount was reduced from your account balance.")
            return bankAccount.balance -= withdrawAmount
        } else {
            alert("Insufficient funds");
        }
    },
    checkBalance: function () {
        console.log(`Account balance is ${this.balance}`)
    }
};

const amount = document.getElementById('amount');
const deposit = document.getElementById('deposit');
const withdraw = document.getElementById('withdraw');
const checkBalance = document.getElementById('checkBalance');
const balance = document.getElementById('balance');
// const result = document.querySelector('.result');

deposit.onclick = depositHandler;
withdraw.onclick = withdrawHandler;
checkBalance.onclick = checkBalanceHandler;
amount.addEventListener('click', () => {
    if (balance.textContent) {
        balance.textContent = ''
    }
})

// deposit.addEventListener('click', depositHandler);
// withdraw.addEventListener('click', withdrawHandler);
// checkBalance.addEventListener('click', checkBalanceHandler);

function depositHandler() {
    const sum = +amount.value;
    bankAccount.deposit(sum);
    amount.value = '';
}

function withdrawHandler() {
    const sum = +amount.value;
    bankAccount.withdraw(sum);
    amount.value = '';
    balance.innerHTML = ''
}

function checkBalanceHandler() {
    balance.textContent = `Your current balance is: ${bankAccount.balance}`;
}