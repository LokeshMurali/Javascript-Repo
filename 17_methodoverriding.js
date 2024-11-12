/**Method overriding is possible in javascript */
class Car{
    maxSpeed = 100;
    constructor(make, model){
        this.make = make;
        this.model = model;
    }

    startEngine(){
        console.log("Starting engine .... for car!");
    }
}

class Audi extends Car {
    maxSpeed = 200;
    //overriden method
    startEngine(){
        console.log("Starting engine .... for audi!");
    }

    autoParking(){
        console.log("Park the audi in auto parking mode");
    }
}

const audi = new Audi();
audi.startEngine(); //first preference will be given to overriden method
console.log(audi.maxSpeed); //first preference will be given to child class variable

const car = new Car();
car.startEngine();
console.log(car.maxSpeed);
