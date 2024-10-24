/**Declaration of an array */
let myArray =[]; // An empty array
let numbers = [1,2,3,4,5]; // An array with numbers
let fruits = ["apple", "Banana", "orange"]; // An array with strings


/**10 Important array functions */

//1.push: adds an element at the end of an array
let lang = ["Java", "Python","JS"];
lang.push("Ruby");
console.log(lang); 
//output [ 'Java', 'Python', 'JS', 'Ruby' ]

//2.pop: removes the last element in an array and returns the removed value
let num = [1,2,3,4,5];
let removedEle = num.pop();
console.log(num); //output [ 1, 2, 3, 4 ]
console.log(removedEle); //output 5

//3.shift: removes the first element in an array and returns the removed value
let fruitsNew = ["Apple", "Banana", "Orange","Grapes"];
let removedFru = fruitsNew.shift();
console.log(fruitsNew); //output [ 'Banana', 'Orange', 'Grapes' ]
console.log(removedFru); //output Apple

//4.unshift: adds one or more element at the beginning of the array and return the array length
let colors = ["White", "Blue"];
colors.unshift("Pink");
console.log(colors); //output [ 'Pink', 'White', 'Blue' ]
console.log(colors.length); //output 3

//5.splice: allows you to remove and add an element from a specific index in an array. 
            //also return the removed elements in the array
let animals = ["Dog", "Cat", "Lion", "Tiger"];
let newEle = animals.splice(2,1,"Monkey");
console.log(animals); //output [ 'Dog', 'Cat', 'Monkey', 'Tiger' ]
console.log(newEle); //output [ 'Lion' ]

//6.slice: creates and returns a new subset array based on the index provided
let products = ["TV", "Fridge", "Washing Machine", "Fan","Light"];
let productsSubset = products.slice(1,4);
console.log(products); //output [ 'TV', 'Fridge', 'Washing Machine', 'Fan', 'Light' ]
console.log(productsSubset); //output [ 'Fridge', 'Washing Machine', 'Fan' ]

//7.concat: combines two or more arrays and create a new array
let cars = ["Maruti","Chevy","Kia","M&M"];
let bikes = ["Hero","Honda", "RE"];
let vehicles = cars.concat(bikes);
console.log(vehicles);

//8.indexOf: returns the first occurance of the element in the array. If the element is not present, it returns -1
let smartPhones = ["Apple", "Vivo","Samsung", "Oppo", "Samsung"];
let samsungIndex = smartPhones.indexOf("Samsung");
console.log(samsungIndex);
let xioamiIndex = smartPhones.indexOf("Xioami");
console.log(xioamiIndex);

//2nd Samsung index:
let samsungSecondIndex = smartPhones.indexOf("Samsung", smartPhones.indexOf("Samsung")+1);
console.log(samsungSecondIndex);


//9. includes: Whether an array has an element in it or not
let browsers = ["Chrome", "Firefox", "Edge", "Safari"];
let flag = browsers.includes("Firefox");
console.log(flag);

//with multiple values
let multiFlag = browsers.includes("Edge", "Orca");
console.log(multiFlag);

//with negative value
let negFlag = browsers.includes("Orca");
console.log(negFlag);


//10. forEach: Iterates and prints the values in an array
let numbers1 = [1,2,3,4,5,6,7];
numbers1.forEach((e) => {
    console.log(e);
});
