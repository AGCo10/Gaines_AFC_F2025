// script.js
// Name: Adam Gaines
// Lab2 - Simple Interest Calculator

// Step 1: Declare a function named calculateSimpleInterest which will take 3 arguments seperated by commas represented as principal, rate, and time.
function calculateSimpleInterest(principal, rate, time) {
    // Formula for calculating interest: (Principal × Rate × Time) / 100
    return (principal * rate * time) / 100;
}

// Step 2: Use the prompt method to have a user enter the amount of principal, cast it as a number, and then store that value as the principal variable.
const principal = Number(prompt("Enter the principal amount:"));

// Step 3: Use the prompt method to have a user enter the interest rate, cast it as a number, and then store that value as the rate variable.
const rate = Number(prompt("Enter the rate of interest:"));

// Step 4: Use the prompt method to have a user enter the duration of the loan in years, cast it as a number, and then store that value as the time variable.
const time = Number(prompt("Enter the time in years:"));

// Step 5: execute, or call, the calculateSimpleInterest function on using the three stored variables as arguments, and store the result as the interest variable.
const interest = calculateSimpleInterest(principal, rate, time);

// Step 6: Print out the users interest result. Using the comma instead of a + sign will add a space after the end of the first String.
console.log("Your simple interest is: $", interest);