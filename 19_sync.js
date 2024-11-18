//Synchronous example 
const fs = require("fs");

const data = fs.readFileSync("lokesh.txt", "utf-8");
console.log(data);

console.log("End of sync program");