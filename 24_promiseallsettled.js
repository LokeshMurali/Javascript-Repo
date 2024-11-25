/**
 * PromiseAllSettled 
 * -Useful when you want to process all promises, whether they succeed or fail,
 * and you want to gather information about the outcome of each promise
 */

//case:
//f1 -- resolved
//f2 -- rejected

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Getting data from DB");
        }, 2000);
    });
};

const getError = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject("Error: Data is not avaiable from DB");

        }, 2000);
    });
};

Promise.allSettled([getData(), getError()])
.then(results => {
    results.forEach(results => {
        if(results.status === "fulfilled"){
            console.log(`Values : ${results.value}`);
        }
        else{
            console.error(`Reason for rejection : ${results.reason}`);
        }
    });
});