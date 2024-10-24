//1.Arrow function with no argument
const msg = () => "HELLO JS..";
console.log(msg());

//2.Arrow function with single argument
const square = num => num * num;
const result = square(5);
console.log(result);

//3.Arrow function with multiple arguments
const add = (a,b) => a + b;
const addRes = add(10,10);
console.log(addRes);

//4.Arrow function examples 1

const person = {
    firstName: "Lokesh",
    lastName: "Murali"
};

const getFullName = person => `${person.firstName} and ${person.lastName}`;
const fullName = getFullName(person);
console.log(fullName);

//5.Arrow function with default arguments
const greet = (username = "guest", age = 0) => `Hello, ${username}! you are ${age} years old.`;
const g1 = greet();
console.log(g1);
const g2 = greet("Rose", 29);
console.log(g2);

//6.Arrow function rest parameters... varargs
const sum = (...numbers) => numbers.reduce((acc, num) => acc+num, 0);
const total = sum(1,2,3,4,5);
console.log(total);

//another example for rest parameters
const browserInfo = (browser = "chrome", ...details) =>{
    console.log(`The Browser is ${browser}`);
    console.log("Other detail are ", details);
}

//calling the arrow function
browserInfo();
browserInfo("firefox", "115.11", "mozilla", "headless");
        
