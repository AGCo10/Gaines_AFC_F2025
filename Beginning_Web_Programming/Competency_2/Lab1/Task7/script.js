// script.js
// Name: Adam Gaines
// Task7 - Grade Classification

// Step 1: Use the fat arrow expression to declare a classifyGrade function, taking in a grade (string) input.
const classifyGrade = (grade) =>
    // Step 2: Ternary operator and notation will function like an if-else statement.
    (grade >= 90) ? "A" :
        (grade >= 80) ? "B" :
            (grade >= 70) ? "C" :
                (grade >= 60) ? "D" :
                    "F";

// Step 3: Use the prompt method to have a user input a String Grade and store as an input variable.
const input = prompt("Enter a grade (0-100):");

// Step 4: Cast the input as a number to be stored in the grade variable.
const grade = Number(input);

// Step 5: Validate if the grade input is a number. If its not, the program will return an error.
if (Number.isNaN(grade)) {
    console.log("Error: Please enter a valid number.");
} else {
    // Step 6: Call the classifyGrade function on the grade variable and return the appropriate result.
    const classification = classifyGrade(grade);
    console.log("The grade classification is:", classification);
}