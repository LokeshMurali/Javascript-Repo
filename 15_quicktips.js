//1.Find unique values from array:
const numbers = [1,2,3,2,1,4,3,5,6,4,4];
/*adding the numbers arrays into set 
since set accepts only unique values and converts back to array using ...(spread operator)*/
const uniqueNumbers = [... new Set(numbers)]; 
console.log(uniqueNumbers);

//2.Convert int to string:
const num = 34;
//type 1:
const stringNum = num + '';
console.log(stringNum);
console.log(typeof stringNum);
//type 2:
const stringNum1 = String(num);
console.log(stringNum1);
console.log(typeof stringNum1);

//3.Float to Int:
const floatValue = 3.14;
const intValue = parseInt(floatValue);
console.log(intValue);

//4.Check if a variable is a number:
const value = 5;
//type 1:
if(typeof value === "number"){
    console.log(`Value is a number ${value}`);
}
else{
    console.log(`Value is not a number ${value}`);
}

//type 2:
if(!isNaN(value)){
    console.log(`Value is a number ${value}`);
}
else{
    console.log(`Value is not a number ${value}`);
}

//5.Swapping variable values
let a = 3;
let b = 5;
[a,b] = [b,a];
console.log(a,b);

//6. Check if an object has a property:
const person = {
    name: "Lokesh",
    age: 28
}

if(person.hasOwnProperty("name")){
    console.log(`The person has a property ${person.name}`);
}
else{
    console.log("The person not have a property");
}

//7.Remove falsy value from an array: (false, 0, ", null, undefined, NaN")
const bothValues = [1,0,false,2,3,"", null, undefined,4,5];
const truthyvalues = bothValues.filter(Boolean);
console.log(truthyvalues);

//8.converting a string into lowercase and uppercase
let js ="Learning Javascript concepts";
let lowerCase = js.toLowerCase();
let upperCase = js.toUpperCase();
console.log(lowerCase);
console.log(upperCase);

//9.Check if an array contains a specific value:
let lang = ["java","javascript","python","ruby"];
if(lang.includes("javascript")){
    console.log("language is present");
}
else{
    console.log("language is not present");
}

//10.Check if an array is empty:
let empty = [];
if(empty.length === 0){
    console.log("The array is empty");
}
else{
    console.log("The array is not empty");
}

//11.Generate a random number:
const min = 10;
const max = 200;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`The random number is : ${randomNum}`);

//12.converting string to number:
const strNum = "104";
//type 1:
let n1 = parseInt(strNum);
console.log(typeof n1);

//type 2:
let n2 = parseFloat(strNum);
console.log(typeof n2);

//13.Join array elements into a string
const words = ["Hello","Lokesh"];
const sentence = words.join(" ");
console.log(sentence);

//14.Get object property:
const user = {
    name: "Lokesh",
    age: 25,
    designation: "Software Engineer"
}

console.log(user["name"]);
console.log(user["age"]);

//15.Clone an array or object
const marks = [36,45,60,37,70];
const duplicateMarks = [...marks] //spread operator
console.log(duplicateMarks);

const remote = {
    button: "functional",
    battery: "full",
    working: true
}

const duplicateRemote = {...remote}; //spread operator
console.log(duplicateRemote);

//16.Converting an object to an array
const employee = {
    name: "Lokesh",
    age: 26,
    role: "Engineer",
    address: {
        no: 46,
        location: "River view street",
        city: "Chennai"
    }
};

//a. Fetching keys alone
const keysArray = Object.keys(employee);
console.log(keysArray);

//b. Fetching values alone
const valuesArray = Object.values(employee);
console.log(valuesArray);

//c. Fetching both key-value array
const keyValArray =  Object.entries(employee);
console.log(keyValArray);

//17.Get current date and time
const currentDate  = new Date();
console.log(currentDate.toLocaleString());

//18.Check variable is defined:
let i;
if(typeof i === "undefined"){
    console.log("Variable is not defined");
}

//19.Truncate an array:
const truncateArray = [0,1,2,3,4,5,6,7];
truncateArray.length = 4;
console.log(truncateArray);

//20.Getting last element in an array
arrElement = [34,54,65,2,0,55];
lastElement = arrElement.slice(-1);
console.log(lastElement);
