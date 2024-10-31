//number
let x = 30;
console.log(typeof x); //output number

//string
let s = "Hello!";
console.log(typeof s); //output string

//object
let obj = {
    name: "Lokesh",
}
console.log(typeof obj); //output object

//boolean
let flag = true
console.log(typeof flag);  //output boolean

//typeof returns a string value
let type = typeof flag;
console.log("typeof return value " + type); //output "boolean"
console.log(typeof type); //output string

//Array
let arr = [1,2,3,4,5];
console.log(typeof arr); //output object

//null
let val = null;
console.log(typeof val); //output object

//undefined
let y;
console.log(typeof y); //output undefined

function print(name){
    console.log(`Print my name ${name}`);

}
console.log(typeof print); //output function