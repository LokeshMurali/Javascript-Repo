/**Static concepts */

//creating a car class with static property and static method
class Car{
    //static property
    static wheels = 4;
    constructor(name, model, price){
        this.name = name;
        this.model = model;
        this.price = price;
    }

    drive(){
        console.log(`I am driving ${this.name} car!`);
    }
    //static method  
    static stop(){
        console.log("Stop the car");
    }
}


//Accessing the static property and static methods without creating an object
console.log(Car.wheels);
Car.stop();

//Creating an object for car class
const c1 = new Car("Honda", 2002, "12L");
console.log(c1.name);
c1.drive();

