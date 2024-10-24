/**For loop */

for(let i =0; i<=10; i++){
    console.log(i);
}

/**Iterating arrays using for of loop */

console.log("Iterating arrays using for of loop");

let numArray = [11,12,13,14,15,16,17,18,19];

for(const arrayVal of numArray){
    console.log(arrayVal);
}

/**Iterating arrays using for loop */
console.log("Iterating arrays using for loop");

for(let i=0; i<numArray.length; i++){
    console.log(numArray[i]);
}

/**while loop */
console.log("While loop");

let i =0;
while(i<=10){
    console.log(i);
    i++;
}

/**do While loop */
console.log("do while");

let j=50;
do{
    console.log(j);
    j++;
}while(j<=60);


/**for in loop for iterating object */
console.log("Iterating user object with for in loop");

const user = {
    name: "Lokesh",
    age: 30,
    city: "Chennai"
}

for(const userkey in user){
    console.log(`${userkey} : ${user[userkey]}`);
}