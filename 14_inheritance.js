/**Multiple inheritance is not supported in javascript */

//Parent class (super class)
class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getVehicleInfo(){
        return `${this.make}, ${this.model}, ${this.year}`;
    }

    startEngine(){
        console.log("Starting Engine....");
    }

    stopEngine(){
        console.log("Stopping Engine....");
    }
}


//Child class (sub class)
class Car extends Vehicle {
    constructor(make, model, year, fuelType){
        super(make, model, year); //calls the parent class constructor (Vehicle class)
        this.fuelType = fuelType;
    }

    driveCar(){
        console.log(`driving the car ${this.model} and the fuel is ${this.fuelType}`);
    }
}

//Another child class (sub class)
class Truck extends Vehicle {
    constructor(make, model, year, loadingCapacity){
        super(make, model, year); //calls the parent class constructor (Vehicle class)
        this.loadingCapacity = loadingCapacity; 
    }

    driverTruck(){
        console.log(`Drive the truck ${this.model} capacity is ${this.loadingCapacity }`);
    }

}

//Creating the objects (instances)
const car = new Car("Honda", "Jazz", 2023, "Petrol");
const truck = new Truck("Tata", "Marcopolo", 1992, "1000ton");

//Calling child class methods
car.driveCar();

//calling parent class methods using child class object
const details = car.getVehicleInfo();
console.log(details);
car.startEngine();

//calling another child class methods
truck.driverTruck();

//calling parent class methods using child class object
truck.stopEngine();
