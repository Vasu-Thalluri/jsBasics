/*
let calculator = {
    add: function(a, b){
        return a + b;
    },
    subtract: function(a, b){
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    }
}

let add = calculator.add(7, 8);
console.log("addition of a and b is",add);

let subtract = calculator.subtract(17, 8);
console.log("subtract of a and b is",subtract);

let multipli = calculator.multiply(17, 8);
console.log("multiply of a and b is",multipli);
console.log("-------------------");
*/

let totalCost = {
    soapPrice: 42,
    toothPastePrice: 20,
    /*
    add: ()=>{
        return this.soapPrice + this.toothPastePrice; //The this in the arrow function refers to the global object (e.g., window in browsers). 
                                                        //Since soapPrice and toothPastePrice are properties of the totalCost object and not the global object, 
                                                        //the addition will result in NaN (because undefined + undefined = NaN).
                                                        //To resolve this issue, replace the arrow function with a regular function for the add method. 
                                                        //Regular functions bind this to the object on which they are called.
    }
    */
    add: function(){
        return this.soapPrice + this.toothPastePrice;
    }
}
console.log("Total of two products is",totalCost.add());
console.log("-------------------");


const bankAccount = {
    //currentAmount: 100,
    balance: 0,
    transactions: [],
    deposit: function(amount){
        //console.log(this.balance);
        this.balance += amount;
        this.transactions.push({
            type: "deposit",
            amount: amount,
            date: new Date().toISOString()
        });
        console.log(`Deposited $${amount}. New balance: $${this.balance}.`);
        
        // obj.balance += amount;
        // if(!Array.isArray(this.balance)){
        //     this.balance = []
        // };
        // console.log(Array.isArray(this.balance));
        // let currentAmount = this["balance"].push(obj.balance);
        // console.log(currentAmount);

        // console.log(obj);
        // console.log("amount added",balance);
        
        // this.balance = balance;
        //console.log("updated balance",this.balance);
        // `deposited ${amount} rupees of amount`
        return this.balance;
        
    },
    withdraw: function(amount){
        if(amount > this.balance) {
            this.balance = "Insufficient funds";
            return this.balance;
        }
        this.balance -= amount;
        this.transactions.push({
            type: "withdrawal",
            amount: amount,
            date: new Date().toISOString()
        });
        console.log(`Withdrew $${amount}. New balance: $${this.balance}.`);
        /*
        this.balance -= amount;
        console.log("updated balance",this.balance);
        //this.balance = balance;
        */
         return this.balance;
    }
}

console.log(bankAccount.deposit(500));
console.log(bankAccount.deposit(500));
//console.log(bankAccount.balance)
console.log(bankAccount.withdraw(100));
console.log("Current balance",bankAccount.balance);
console.log(bankAccount.transactions);

/*
const shoppingCart = {
    items: [],
    total:0,
    addItem: function(itemName, price){
        let item = { name: itemName, price: price }
        this.items.push(item);
        this.total += item.price;
    },
    removeItem: function(removeItem){
        let index = this.items.findIndex((item)=> item.name === removeItem);
        //console.log(index);
        let removedItem = this.items.splice(index, 1)[0];
        console.log(removedItem);
        // console.log(removedItem[0]);
        console.log(removedItem.price);
        
        this.total -= removedItem.price;
        console.log(`Removed ${removeItem}. Total: $${this.total}.`);
    }
}

shoppingCart.addItem("Mobile", 500);
shoppingCart.addItem("Laptop", 1000);
shoppingCart.addItem("Pendrive", 200);
shoppingCart.removeItem("Pendrive");
console.log(shoppingCart.items);
console.log(shoppingCart.total);
*/
function globalFunction(){
    console.log(this);
    
}
globalFunction();