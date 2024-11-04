//Creating a class
class Car{
    constructor(name, price, model, color){
        this.name = name;
        this.price = price;
        this.model = model;
        this.color = color;
    }

    refuel(){
        console.log(`${this.name} car is refueled`);
    }
}

//creating an object with new keyword
const c1 = new Car("BMW", 10000, "520d", "White");
console.log(c1.name);
console.log(c1.price);
console.log(c1.model);
console.log(c1.color);
c1.refuel();

console.log("---------");

const c2 = new Car("Honda", 5000, "Civic", "Yellow");
console.log(c2.name);
console.log(c2.price);
console.log(c2.model);
console.log(c2.color);
c2.refuel();

