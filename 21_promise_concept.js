
const randomValuePromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const randomValue = Math.random();
        if(randomValue > 0.5){
            resolve(randomValue);
        } else{
            reject(new Error("Value is too small"));
        }

    }, 3000);
});

randomValuePromise.then(result => {
    console.log(`Promise is fulfilled with valule ${result}`);
})
.catch(error => {
    console.log(`Promise is rejected with error ${error}`);
});