// script.js
// Name: Adam Gaines
// Task9 - Weekday Detector

// Step 1: Use the fat arrow expression to declare the getWeekday function.
const getWeekday = () => {
    // Step 2: Create a today (Date) object as a new object using the Date() constructor.
    const today = new Date();

    // Step 3: use the getDay() method to pull the day of the week from the Date() object we created called today.
    const dayNumber = today.getDay();

    // Step 4: Create an array, named days, containing all 7 days of the week.
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Step 5: Pass the dayNumber variable into the days array to return the current day.
    return days[dayNumber];
};

// Step 6: Call our getWeekday function and log it in the console..
console.log("Today is:", getWeekday());