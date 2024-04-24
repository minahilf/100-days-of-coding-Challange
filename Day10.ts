//Question 28
let age : number = 20;
if(age <= 2){
    console.log("That the person is a baby.");
} else if(age <= 4){
    console.log("That the person is a toddler.");   
} else if(age <= 13){
    console.log("That the person is a kid.");   
} else if(age <= 20){
    console.log("That the person is a teenager.");   
} else if(age <= 65){
    console.log("That the person is a adult.");   
} else {
    console.log("That the person is an elder.");   
}

//Question 29
let favFruits : string[] = ["Mango", "Strawberry", "Kiwi"];
if(favFruits.includes("Mango")){
    console.log("Mango is in the array");
}  if (favFruits.includes("Strawberry")){
    console.log("Strawberry is in the array");
} if(favFruits.includes("Kiwi")){
    console.log("Kiwi is in the array");
}  if(favFruits.includes("Apple")){
    console.log("Apple is in the array");
} else {
    console.log("The fruit is not in the array");
}

//Question 30
let people : string[] = ["Adeel", "admin", "Bilal", "Hamzah"];
people.forEach(people => {
    if(people === "admin"){
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${people} Thank you for logging in`);
    }
})

