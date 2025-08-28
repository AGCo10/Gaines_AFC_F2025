// script.js
// Name: Adam Gaines
// Task10 - How Long Until Graduation

// Step 1: Create the getToday function using the fat arrow expression, which will return a new Date() constructor.
const getToday = () => {
    return new Date();
};

// Step 2: Declare the today variable which will store a Date value from the Date()
const today = getToday();

// Step 3: Create a string array called days which contains all days of the week.
// Create a string variable named weekday which checks the days array, using our today variable, and the getDay() method.
// the getDay() method returns a number equivalent to the index of today's value in the days array.
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekday = days[today.getDay()];

// Step 4: Declare another array of the months of the year named months.
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Use three Date() methods to return and store values for the current year, month, and day based on our today variable.
const year = today.getFullYear();
const month = months[today.getMonth()];
const day = today.getDate();

// Step 5: Create a function using fat arrow expression that will conditionally return a suffix using a switch case dependent on the value of the argument n (String).
const getSuffix = (n) => {
    if ([11, 12, 13].includes(n % 100)) return "th";
    switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
};

// arrange the String variable formattedDate in our new date format with a suffix dependent on the day.
const formattedDate = year + ", " + month +  " " + day + getSuffix(day);

// Step 6: Log the results to our console.
console.log("Today is:", weekday);
console.log("Formatted date:", formattedDate);

// Step 7: Assign a date variable named graduationDate the value (November 13, 2025), which is our hard-coded graduation day.
const graduationDate = new Date("2025-11-13");

// Determine how many days exist between today's get and the graduation day, and calculate that time using the difference in days / the time in a day. Store this value as daysRemaining (number) variable.
const diff = graduationDate - today;
const daysRemaining = Math.ceil(diff / (1000 * 60 * 60 * 24));

// Step 8: Log to the console how many days the user has remaining until graduation day.
console.log("And you have " + daysRemaining + " days left in this web design program until graduation.");