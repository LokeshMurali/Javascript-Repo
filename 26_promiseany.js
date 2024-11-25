/**
 * Promise.any()
 * --It's used for handling multiple promises and resolving with the value of the first fulfilled/resolved promise
 * --However, unlike promise.race(), promise.any() doesn't reject immediately when the first promise rejects
 * --instead, it waits until at least one promise is fulfills/resolved.
 * 
 */

const getMessage = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("Get message from API 1");
        }, 500);
    });
};

const getUsers  = ()=>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject("Error: User data could not be fetched.");
        }, 300);
    });

};

const getProducts = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject("Error: Product info could not be fetched.");
        }, 1000);
    });
};

Promise.any([getMessage(), getUsers(), getProducts()])
.then(result =>{
    console.log(`First successful result: ${result}`); // will log the first resolved promise result
})
.catch(error =>{
    console.log(`All promises rejected : ${error}`); // will log all rejectiong reasons if all promises reject

});