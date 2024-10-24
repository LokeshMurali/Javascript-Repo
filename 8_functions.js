//1. function declaration
function add(a,b) {
    return a+b;
}
//calling a function
 const sum = add(5,10);
 console.log(sum);

//2. function expression: (anonymous functions)
const multiply = function (x,y){
    return x * y;
}

//calling a function expression
const mul = multiply(5,6);
console.log(mul);

//3. arrow function
const divide = (t1,t2) => t1/t2;

//calling an arrow function
const div = divide(20, 10);
console.log(div);

//4. function constructor 
//note new Function(first, last); last argument in function will be the body
const substract = new Function('i','j','return i - j');

//calling a function constructor
const subs = substract(10,5);
console.log(subs);

//5. IIFE (Immediately Invoked Function Expression)
(function(){
    console.log("Server is up and running on port 3000");
}) ();

//6. generator function
//function* and yield keyword
function* generateNumbersSequence(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

//calling a generator function
const generator = generateNumbersSequence();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

//7. Annonymous function
//no specific name

const numbers = [1,2,3,4,5];
const squareNumbers = numbers.map((e) => {
    return e * e;

});
console.log(squareNumbers);

//8. Recursive function
function factorial(n){
    if(n===0 || n===1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }

}

//calling an recursive function
const recur = factorial(5);
console.log(recur);

//9. Higher order function

function addition(a,b){
    return a+b;
}

function mulitplication(a,b){
   return a*b;
}

function operator(funcName, a, b){
    return funcName(a,b);
}

//calling a higher order function
const operValue = operator(addition, 12, 12);
console.log(operValue);
const operValue2 = operator(mulitplication, 5,5);
console.log(operValue2);