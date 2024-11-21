 //Promise all
 //Case: 1
 /**
  * f1 -- resolve
  * f2 -- resolve
  * f3 -- resolve
  */

 const function1 = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data from function 1");
        }, 2000);
    });

 };

 const function2 = ()=>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("Data from function 2");
        }, 2000);
    });
 };

 const function3 =()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data from function 3");
        }, 2000);
    });

 };

 Promise.all([function1(), function2(), function3()])
 .then(resArray =>{
    console.log(`All data from diff functions: ${resArray}`);
 })
 .catch(error =>{
    console.log(`Error in promise: ${error}`);
 });

 //Case 2:
 //f1 -- resolved
 //f2 -- rejected

 const getData = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("Getting data from DB");
        }, 2000);
    });
 };

 const getError = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject("Error: data is not available from DB");
        }, 2000);
    });
 };

 Promise.all([getData(), getError()])
 .then(dataArray =>{
    console.log(`Add data is fetched: ${dataArray}`);
 })
 .catch(error => {
    console.log(`Error occured: ${error}`);
 });
