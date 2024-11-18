//Asynchronous example 
const { error } = require("console");
const fs = require("fs");

fs.readFile("lokesh.txt", "utf-8", (error, data)=>{
    console.log(data);
});

console.log("End of async program");