// script.js
// Name: Adam Gaines
// Task6 - Student Array Operations

// Step 1: Assign a students object, which is a collection of key-value pairs, with "hardcoded" values, meaning the values have been assigned in the program rather than from user input.
// Within the students object will be multiple arrays to represent individual students.
let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 18 }
];

// Step 2: using the fat arrow expression which uses shorter syntax, create a variable updateStudentAge which will take an array as an argument.
const updateStudentAge = (array) => {
    // Step 3: Use the prompt method to get a String value from the user and store that value as studentName variable.
    let studentName = prompt("Enter the student's name to update:");

    // Step 4: Search through the students object/arrays to find the studentName and change the name to lower case using the toLowerCase() method. Ensure strict equality using the === comparator.
    // Use fat arrow expression to assign an s variable equal to the referenced studentName like you would normally do using the 'this' statement.
    // Store this value as a student variable.
    let student = array.find(s => s.name.toLowerCase() === studentName.toLowerCase());

    // Step 5: Check if the student exists in the array/object, returning an error if not found.
    if (!student) {
        console.log("Error: Student not found.");
        return;
    }

    // Step 6: Prompt the user for a student age, cast it as a number, and store as a newAge variable.
    let newAge = Number(prompt("Enter the new age:"));

    // Step 7: Check the newAge variable to determine if it is a number, returning an error if it isn't.
    if (Number.isNaN(newAge)) {
        console.log("Error: Age must be a number.");
        return;
    }

    // Step 8: If the newAge variable passes the initial check, store the student's new age value based on the student name previously stored.
    student.age = newAge;

    // Step 9: Print to the console the students that had values changed from the array argument.
    console.log("Updated students:", array);
};

// Step 10: execute the updateStudentAge function on the students object.
updateStudentAge(students);