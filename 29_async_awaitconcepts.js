//async function without await

async function f1() {
    console.log("This is a async function without await step");
    return 42; // return a promise(resolve) on top of 42
}

//calling the async function
f1()
    .then((result) => {
        console.log(result);
    });

//async function without await but with error:
async function f2() {
    console.log("This is an async function with error");
    throw new Error("This is my error"); //return a promise(rejected)
}

//calling the async function
f2()
    .catch(error => {
        console.log(error);
    });

//async function with resolved/rejected promise:
function getInfo() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        setTimeout(() => {
            if (randomNumber < 0.5) {
                resolve(randomNumber);
            }
            else {
                reject(new Error("Wrong value error"));
            }
        }, 2000);
    });
}

//Create async function which is calling getInfo()
async function getNumberInfo() {
    try {
        const result = await getInfo(); //async step
        console.log(result);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

//callling the getInfo()
getNumberInfo();