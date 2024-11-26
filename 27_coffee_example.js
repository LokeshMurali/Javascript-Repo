/**
 * Start the coffee machine - 2 sec
 * Grind the coffee beans - 1 sec
 * Boil the water - 1.5 sec
 * Pour boiling water into a cup - 0.5 sec
 * Add ground    coffee into the cup - 0.5 sec
 * Stir the coffee - 0.3 sec
 * Enjoy your coffee
 */

const startCoffeeMachine = (callback) => {
    console.log("Starting the coffee machine...");
    setTimeout(()=>{
        console.log("Coffee machine is ready");
        callback("coffee machine is ready");
    }, 2000);
};

const grindCoffeeBeans = (callback) =>{
    console.log("Griding coffee beans...");
    setTimeout(()=>{
        console.log("Coffee beans are ground");
        callback("ground coffee");
    }, 1000);

};

const boilWater = (callback) => {
    console.log("Boiling water...");
    setTimeout(()=>{
        console.log("Water is boiled");
        callback("Boiled water");
    }, 1500);
};

const pourBoilingWaterIntoCup = (boiledWater, callback) => {
    console.log("Pouring boiling water into a cup...");
    setTimeout(()=>{
        console.log("Boiling water is in the cup");
        callback(`${boiledWater} in the cup`);
    }, 500);
};

const addCoffeeToCup = (groundCoffee, callback) => {
    console.log("Adding ground coffee to the cup...");
    setTimeout(()=>{
        console.log("Coffee is added to the cup");
        callback(`coffee is added to ${groundCoffee}`);
    }, 500);
};

const stirCoffee = (coffeeInCup, callback)=> {
    console.log("Stirring the coffee ...");
    setTimeout(() =>{
        console.log("Coffee is stirred.");
        callback(`Enjoyable ${coffeeInCup}`);
    }, 300);

};

const enjoyCoffee = (finalCoffee) => {
    console.log(`Enjoying my ${finalCoffee}`);
};


//Start the coffee machine
//Grind coffee beans
//Boil water
//Pour boiling water into a cup
//Add ground coffee to the cup
//Stir the coffee
//Enjoy your coffee

//Callback hell:
startCoffeeMachine((coffeeMachineStatus) => {
    grindCoffeeBeans((groundCoffee)=>{
        boilWater((boiledWater) => {
            pourBoilingWaterIntoCup(boiledWater, (waterInCup) => {
                addCoffeeToCup(groundCoffee, (coffeeInCup)=>{
                    stirCoffee(coffeeInCup, (finalCoffee) => {
                        enjoyCoffee(finalCoffee);
                    })
                })
            })
        })

    })
});