//Function that returns a resolved promise
const resolvedPromise = ()=>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("Resolved!!");
        }, 1000);
    });
};

//Function that returns a rejected promise
const rejectedPromise = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject("Rejected!!");
        }, 3000);
    });
};

//Use Promise.race() to see which promise settles first
Promise.race([resolvedPromise(), rejectedPromise()])
.then(result =>{
    console.log(`Results : ${result}`);
})
.catch(error =>{
    console.log(`Error : ${error}`);
});