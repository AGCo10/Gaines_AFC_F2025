// script.js
// Name: Adam Gaines
// Task3 - Favorite Color Selector

// Step 1: declare an array using let called colors that contains a collection of Strings.
let colors = ["red", "blue", "green"];

// Step 2: declare a function addColor to pass an array of strings as an argument.
function addColor(colorArray) {
    // Step 3: Using the prompt method, ask the user for a color to add to the array and store that as the newColor String variable.
    const newColor = prompt("Enter a color to add:");

    // Step 4: Add the newColor value to the colorArray using the unshift method, which will store the new value at [0] of the array, bumping the other values to the right.
    colorArray.unshift(newColor);

    // Step 5: Print out the new array including the value stored in newColor.
    console.log("Updated colors:", colorArray);
}

// Step 6: Call the addColor function passing the colors array as the argument.
addColor(colors);