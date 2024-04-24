"use strict";
//Question 13
let transport = ["Honda", "Toyota", "Fortuner"];
transport.forEach(transport => {
    console.log(`I would like to own ${transport}`);
});
//Question 14
let guests = ["Usman", "Shafaq", "Aiman"];
guests.forEach(guests => {
    console.log(`Hey ${guests} You are invited at my place for dinner`);
});
// Question 15
let cantAttend = "Aiman";
let newGuest = "Abeesha";
guests[guests.indexOf(cantAttend)] = newGuest;
guests.forEach(guests => {
    console.log(`Hey ${guests} you are invited at my place for dinner`);
});
// DAY 6
//Question 16
console.log("Hey I found Bigger dinner table!");
guests.unshift("Ali");
guests.splice(guests.length / 2, 0, "Amna");
guests.push("Rehman");
guests.forEach(guests => {
    console.log(`Hey ${guests} you are invited at my place for dinner`);
});
//Question 17
console.log("Unfortunately I can only invite two people");
while (guests.length > 2) {
    let removedGuests = guests.pop();
    console.log(`I am Sorry ${removedGuests}, I cant invite you for dinner`);
}
guests.forEach(guests => {
    console.log(`${guests} You are still invited for dinner`);
});
console.log(`Guests who are still coming ${guests}`);
//Question 18
let favPlaces = ["Turkey", "Saudia Arabia", "Maldives", "NewZealand", "Australia"];
console.log("Original: ", favPlaces);
console.log("Alphabetical Order: ", favPlaces.sort());
console.log("Checking:", favPlaces);
console.log("Reverse: ", favPlaces.reverse());
console.log("Again Checking: ", favPlaces);
favPlaces.reverse();
console.log("Reversed Order: ", favPlaces);
favPlaces.reverse();
console.log("Original Order: ", favPlaces);
favPlaces.sort();
console.log("Again Alphabetical Order: ", favPlaces);
favPlaces.reverse();
console.log("Again Reverse alphabetical order: ", favPlaces);
//Question 19
console.log(`I am inviting ${guests.length} guests to the dinner`);
