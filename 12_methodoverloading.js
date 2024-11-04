/**Method overloading is not possible in javascript*/

function print(){
    console.log("Hi!");
}

function print(name){
    console.log("Name is "+name);
}

function print(name, age){
    console.log("Name is "+name+" Age is "+age);
}

//calling the function
print(); //output Name is undefined Age is undefined
print("Lokesh"); //output Name is Lokesh Age is undefined
print("Lokesh", 29); //output Name is Lokesh Age is 29