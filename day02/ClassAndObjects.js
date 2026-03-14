/*
Attributes:
- employeeName
- salary
Methods:
- work()
*/

class Employee {
  
    constructor(name, salary) {
        this.employeeName = name;
        this.employeeSalary = salary;
    }
    

  work() {
    console.log(this.employeeName + " is working.");
  }
}

let emp1 = new Employee();
console.log(emp1.employeeName);
console.log(emp1.employeeSalary);

let emp2 = new Employee("Alice", 50000);
console.log(emp2.employeeName);
console.log(emp2.employeeSalary);

emp2.work();

console.log(emp2);


console.log("----------------------------------");


/*

Create a class named Item with the following requirments:
Attributes:
- name
- price
- quantity
Methods:
-constructor() - define and initializes the attributes
- calculateTotalPrice() - returns the total price (price * quantity)
*/

class Item {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    calculateTotalPrice() {
        return this.price * this.quantity;
    }
}

let item1 = new Item("Laptop", 1000, 2);
console.log(item1.name);
console.log(item1.price);
console.log(item1.quantity);
console.log("Total Price: " + item1.calculateTotalPrice());
