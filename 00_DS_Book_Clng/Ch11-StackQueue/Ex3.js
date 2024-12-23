//DESIGN A CASHIER CLASS THAT TAKES IN A CUSTOMER OBJECT AND HANDLES FOOD
//ORDERING ON A FIRST-COME, FIRST-SERVED BASIS

/*
Here are the requirements:
1.	The cashier requires a customer name and order item for the order.
2.	The customer who was served first is processed first.

Here are the required implementations:

•addOrder(customer): Enqueues a customer object to be processed by
deliverOrder()
•deliverOrder(): Prints the name and order for the next customer to be
processed

*/
const Queue  = require("./Queue/Search.js")

function Customer(name, order){
    this.name = name;
    this.order = order;
}

function Cashier(){
    this.customer = new Queue(); 
}

Cashier.prototype.addOrder = function(customer){
    this.customer.enqueue(customer); 
}

Cashier.prototype.deliverOrder = function(){
    var finishedCustomer = this.customer.dequeue(); 

    console.log(finishedCustomer.name + ", your " + finishedCustomer.order + " is ready!");
}


var cashier = new Cashier();
var customer1 = new Customer("Ayesha", "Macd");
var customer2 = new Customer("Kiran", "Fries");
var customer3 = new Customer("Ajay", "Dosa");

cashier.addOrder(customer1);
cashier.addOrder(customer2);
cashier.addOrder(customer3)
console.log(typeof(cashier));
cashier.deliverOrder();
cashier.deliverOrder();
cashier.deliverOrder();