let balance = 0;
const balanceElement = document.getElementById("balance");
const transactionHistory = document.getElementById("transaction-history");

function addMoney() {
    let amount = parseFloat(document.getElementById("amount").value);
if(isNaN(amount) || amount <= 0) {
alert("please enter a valid amount.");
return;
}
balance += amount;
updateBalance();
logTransaction("Add", amount);

}


function withdrawMoney(){
    let amount = parseFloat(document.getElementById("amount").value);
    if(isNaN(amount) || amount <= 0){
        alert("please enter a valid amount.");
        return;
    }
    if(amount > balance){
        alert("Insufficient funds.");
        returns;
    }
    balance -= amount;
    updateBalance();
    logTransaction("Withdraw", amount); 
}

function updateBalance(){
    balanceElement.textContent =`$${balance.toFixed(2)}`;
    }

function logTransaction(type, amount){
    let now = new Date().toLocaleString();
    let transactionItem = document.createElement("li");
    transactionItem.textContent = `${now} -${type}: $${amount.toFixed(2)}`;
    transactionHistory.prepend(transactionItem);
}
