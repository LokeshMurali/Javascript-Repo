//Callback hell vs promise chaining

//Start the coffee machine
//Grind coffee beans
//Boil water
//Pour boiling water into a cup
//Add ground coffee to the cup
//Stir the coffee
//Enjoy your coffee

const startCoffeeMachine = () => {
    return new Promise((resolve) => {
        console.log("Starting the coffee machine...");
        setTimeout(() => {
            console.log("Coffee machine is ready");
            resolve("coffee machine is ready");
        }, 2000);
    });
};

const grindCoffeeBeans = () => {
    return new Promise((resolve) => {
        console.log("Grinding coffee beans...");
        setTimeout(() => {
            console.log("Coffee beans are ground");
            resolve("ground coffee");
        });
    });
};

const boilWater = () => {
    return new Promise((resolve) => {
        console.log("Boiling water...");
        setTimeout(() => {
            console.log("Water is boiled");
            resolve("Boiled water");
        }, 1500);

    });

};

const pourBoilingWaterIntoCup = (boiledWater) => {
    return new Promise((resolve) => {
        console.log("Pouring boiling water into a cup...");
        setTimeout(() => {
            console.log("Boiling water is in the cup");
            resolve(`${boiledWater} in the cup`);
        }, 500);

    });

};

const addCoffeeToCup = (groundCoffee) => {
    return new Promise((resolve) => {
        console.log("Adding ground coffee to the cup...");
        setTimeout(() => {
            console.log("Coffee is added to the cup");
            resolve(`coffee is added to ${groundCoffee}`);
        }, 500);

    });

};

const stirCoffee = (coffeeInCup) => {
    return new Promise((resolve) => {
        console.log("Stirring the coffee ...");
        setTimeout(() => {
            console.log("Coffee is stirred.");
            resolve(`Enjoyable ${coffeeInCup}`);
        }, 300);

    });


};

const enjoyCoffee = (finalCoffee) => {
    console.log(`Enjoying my ${finalCoffee}`);
};

//Promise Chanining
startCoffeeMachine((coffeeMachineStatus) => {
    console.log(coffeeMachineStatus);
    return grindCoffeeBeans();
})
.then((groundCoffee)=>{
    console.log(groundCoffee);
    return boilWater();
})
.then((boiledWater)=>{
    console.log(boiledWater);
    return pourBoilingWaterIntoCup(boiledWater);
})
.then((waterInCup)=>{
    console.log(waterInCup);
    return addCoffeeToCup(waterInCup);
})
.then((coffeeInCup)=>{
    console.log(coffeeInCup);
    return stirCoffee(coffeeInCup);
})
.then((finalCoffee)=>{
    enjoyCoffee(finalCoffee);
})
.catch((error)=>{
    console.log(`Error occurred : ${error}`);
});