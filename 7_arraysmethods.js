//1. map: Returns an array that contains results
let numbers = [1,2,3,4,5];
let doubleNumbers = numbers.map((e) => {
    return e * 2;
});
console.log(doubleNumbers); //output [ 2, 4, 6, 8, 10 ]

//F -> C
//(F-32) * (5/9)

let fahTemp = [32,68,86,104,212];

function fahToCel(fah){
    return (fah - 32) * (5/9);

}

let celTemp = fahTemp.map(fahToCel);
console.log(celTemp); //output: [ 0, 20, 30, 40, 100 ]

//2.filter : Filter the data from an array and returns the result array
let num = [1,2,3,4,5,6,7,8,9,10];
let evenNum = num.filter((e) => e % 2 === 0);
console.log(evenNum);

//another example
let employee = [
    {name:"John", age:30, gender:"male"},
    {name:"Bob", age:35, gender:"male"},
    {name:"Lisa", age:40, gender:"female"},
    {name:"Priya", age:25, gender:"female"},
];

let femaleEmpOver30 = employee.filter((emp) => {
    return emp.gender == "female" && emp.age >= 30;
});

console.log(femaleEmpOver30); // output: [ { name: 'Lisa', age: 40, gender: 'female' } ]


//3. reduce: Each and every element of an array reduced into single element of an array
