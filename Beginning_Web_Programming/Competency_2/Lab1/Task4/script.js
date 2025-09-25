// script.js
// Name: Adam Gaines
// Task4 - Event Countdown with Date Object

// Step 1: declare a function called calculateDaysUntil, passing a number as the argument.
function calculateDaysUntil(eventDate) {
    // Step 2: return todays date and store is as the today variable.
    const today = new Date();

    // Step 3: cast the eventDate number passed into the function as a date, and store that as the event variable.
    const event = new Date(eventDate);

    // Step 4: Store the difference between the event and today date values, storing as the diff variable (number)
    const diff = event - today;

    // Step 5: create a number variable called days. Use the Math Library method ceil to round up the result of the diff value divided by the number of milliseconds in a day.
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    // Step 6: Return the stored value in days.
    return days;
}

// Step 7: Use the prompt method to request the YYYY-MM-DD of an event from the user. Store this value as eventDate String variable.
let eventDate = prompt("Enter event date (YYYY-MM-DD):");

// Step 8: create a variable named dateFormat to later validate the user's input is in the correct format.
// The format must match in order to be accepted by the system and the program will continue to prompt the user until it does.
const dateFormat = /^\d{4}-\d{2}-\d{2}$/;

// Store the accepted value as eventDate
while (!dateFormat.test(eventDate)) {
    eventDate = prompt("Invalid format. Please enter date as YYYY-MM-DD:");
}

// Step 9: Call the calculateDaysUntil function on the eventDate variable, and store the result as daysRemaining.
const daysRemaining = calculateDaysUntil(eventDate);

// Step 10: print out the daysRemaining value for the user in the console.
console.log("Days until the event:", daysRemaining);