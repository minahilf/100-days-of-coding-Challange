"use strict";
//Question 22
let frnds = ["usman", "ali", "ahmed"];
console.log(frnds[3]); //intentional error
//Question 23
let Car = "toyota";
console.log("Is Car == 'toyota' ? I predict ture");
console.log(Car == "toyota");
console.log("Is Car == 'honda' ? I predict false");
console.log(Car == 'honda');
let furniture = "Bed";
console.log("Is furniture == 'Dressing' ? I predict False");
console.log(furniture == 'Dressing');
console.log("Is furniture == 'Bed' ? I predict True");
console.log(furniture == 'Bed');
//Question 24
// Equility 
console.log("Equility Test");
console.log("apple" == "apple");
// console.log("apple" == "Apple"); // False
//lower case
console.log("Lower Case Test");
console.log("APPLE".toLowerCase() == "apple");
// Numerical
console.log("Numerical Test");
console.log(5 > 3);
console.log(10 < 10);
// AND OR 
console.log("AND and OR Operator Test");
console.log(5 > 3 && 2 > 1);
console.log(5 > 3 || 2 < 1);
//Array
console.log("Checking that item is in the array");
let pets = ["Cat", "Dog", "Parrot"];
console.log("Is 'Cat' is in the array?");
console.log(pets.includes("Cat"));
console.log("Checking that item is not in the array");
console.log("Is Cow is in the array?");
console.log(pets.includes("Cow"));
