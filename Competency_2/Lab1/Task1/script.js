// script.js
// Name: Adam Gaines
// Lab1 - Dynamic Age Calculator

// Step 1: Declare a function using the function keyword named calculateAge which will take an argument (year). The function keyword is not required when declaring functions.
function calculateAge(year) {
  // Step 2: Create a new object, named currentYear, derived from the Date() constructor, getFullYear() method. This will pull the current 4-digit year.
    // The const function gives the current year object a permanent value that cannot be reassigned later.
  const currentYear = new Date().getFullYear();

  // Step 3: Return a users age based on the year argument. Note, a return type was not specified at the function creation.
  return currentYear - year;
}

// Step 4: Prompt the user to enter their birth year to be stored as an "input" variable.
const input = prompt("Enter your birth year (e.g., 2004):");

// Step 5: taking the input variable, which was stored as a string, and convert it into a number using the Number() method. Store this value as the birthYear variable.
const birthYear = Number(input);

// Step 6: Using an if statement, confirm the value input is valid or not. If the input (string) is strictly equal to 'null' OR the birthYear variable is not a number, return an error.
if (input === null || Number.isNaN(birthYear)) {
  // Step 7: The returned statement for this if condition will inform the user their input was not valid as a year.
  console.log("No valid year provided.");
} else {
  // Step 8: if the input passes the if condition, proceed to execute the calculateAge function on their birthYear variable, and store that value as the user's age.
  const age = calculateAge(birthYear);

  // Step 9: Display or print the users age using a generic string statement concatenated with the age variable.
  console.log("Your age is:", age);
}



