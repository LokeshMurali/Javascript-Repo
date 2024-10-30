//1.Object literals: {}
const user = {
    name: "Lokesh",
    age: 25,
    country: "India",
    occupation: "Engineer"
}

//Calling a object value
console.log(user.name);
console.log(user.occupation);

//2.Constructor function:
function Car(brand, model, price){
    this.brand = brand;
    this.model = model;
    this.price = price;
}

//creating a object and calling a constructor function
const c1 = new Car("BMW", "520d", 10000);
const c2 = new Car("Audi", "Q7", 15000);

console.log(`${c1.brand} ${c1.model} ${c1.price}`);
console.log(`${c2.brand} ${c2.model} ${c2.price}`);

//3.Class style:
class Customer {
    constructor(name, product){
        this.name = name;
        this.product = product;

    }

    addToCart(){
        console.log(`${this.product} added to cart`);
    }
}

//Creating an instance and calling it
const cust1 = new Customer("Lokesh", "Apple MacBook Pro");
console.log(cust1.name);
console.log(cust1.product);
cust1.addToCart();

//4.Object.create(): with some prototype object.
const employeePrototype = {
    printInfo:function(){
        console.log(`Hello, emp name is ${this.name}`);

    }
};

//creating a object and calling it
const e1 = Object.create(employeePrototype);
e1.name = "Tom";
e1.printInfo();


//5.Using factory functions : return an object
function createDepartment(deptName, hod){
    return {
        deptName: deptName,
        hod: hod,
        getDepartmentInfo: function(){
            console.log(`Hello, dept name is ${this.deptName} and hod is ${this.hod}`);
        }
    }

}

//calling a factory function
const dept1 = createDepartment("Physics", "Albet Eisten");
const dept2 = createDepartment("Maths", "Ramanujan");
dept1.getDepartmentInfo();
dept2.getDepartmentInfo();
console.log(dept1);
console.log(dept2);