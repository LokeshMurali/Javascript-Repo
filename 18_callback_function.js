//Callback function - A function passed as an argument into other function
//async call/task - Once this task is completed -- then only callback function is called

//Example 1: (callback is sync)
//basic callback:
function greet(name, callback){
    console.log(`Hello ${name}`);
    callback();
}

//callback function
function welcome(){
    console.log("Welcome!!!");
}

greet("Lokesh", welcome);

//Example 2 :   callback with async function
function printInfo(name, callback){
    //async function/task/step:
    setTimeout(function(){
        console.log(`Printing info for ${name}`);
        callback("Plz call be back..");
    }, 5000); //delay of 5000ms
}

//callback
function displayMessage(msg){
    console.log(msg);
}

printInfo("Vineeth", displayMessage);

//Example 3: Callback with async function
function fetchUserData(userId, callback){
    setTimeout(function(){
        const users = {
            1: {id:1, name:"Tom"},
            2: {id:2, name:"Mike"}
        };

        const user = users[userId];
        if(user){
            callback(null, user);
        } else{
            callback("User not found", null);
        }
    }, 5000); //simulating a delay of 5 sec
}

//callback function:
function handleUserData(error, user){
    if(error){
        console.error("Error : ", error);
    }
    else{
        console.log("User: ", user)
    }

}

fetchUserData(1,handleUserData);
fetchUserData(3,handleUserData);