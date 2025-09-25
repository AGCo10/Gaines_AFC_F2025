// script.js
// Name: Adam Gaines
// Task5 - Temperature Classifier

// Step 1: Declare a classifyTemperature function which will receive a String as an argument.
function classifyTemperature(celsius) {
    // Step 2: Using the formula to convert celsius to fahrenheit, store the result as the fahrenheit variable.
    const fahrenheit = (celsius * (9 / 5)) + 32;

    // Step 3: Using a series if-else statements, return a String dependent on the temperate in fahrenheit.
    if (fahrenheit > 100) {
        return "Hot";
    } else if (fahrenheit > 80) {
        return "Warm";
    } else if (fahrenheit < 40) {
        return "Cold";
    } else {
        return "Chilly";
    }
}

// Step 4: Using the prompt method, request the user enter a temperature in Celsius, storing the String value as input variable.
const input = prompt("Enter temperature in Celsius:");

// Step 5: Cast/convert the input String as a number and store the value as the celsius variable.
const celsius = Number(input);

// Step 6: Using the isNan() method to check a boolean condition, confirm if the celsius variable is a number before proceeding.
if (Number.isNaN(celsius)) {
    console.log("Error: Please enter a valid number.");
} else {
    // Step 7: After the input has been validated, execute the classifyTemperature function on the user's celsius input, storing the value as the String variable classification.
    const classification = classifyTemperature(celsius);

    // Step 8: Log/print the classification result in the console.
    console.log("The temperature is:", classification);
}