//Question 31
let users: string[] = [];
if(users.length == 0){
    console.log("We need to find some users!");
} else {
// greeting from question 28    
}

//Question 32
let currentUsers: string[] = ["minahil", "usman", "ahmed", "sara"];
let newUsers: string[] = ["MINAHIL", "john", "emmy"];

newUsers.forEach(newUser => {
    if (currentUsers.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} is already exist.`);
    } else {
        console.log(`${newUser}  please enter a username`);
    }
});

//Question 32
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let suffix = "th";

numbers.forEach(number => {
    if (number === 1) {
        suffix = "st";
    } else if (number === 2) {
        suffix = "nd";
    } else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});
