// write a function that returns the square of that number.
// declare and assign a function
/*
let squareFunction = (x) => {
    return x*x;
}

//invoke or call a function
console.log(squareFunction(5));


// Now write this into a wierd way
let halfFunction = num => num/2;
// The fat arrow syntax let us take a single paramenter function and return itself.

console.log(`The half number is ${halfFunction(10)}`);

let areaOfRectangle = (height, length) => height*length;

console.log(areaOfRectangle(5,8))

 */
/*
let person = {
    firstName : "",
    lastName : "",
    fullName: function(firstName, lastName) {
        return (() => this.firstName + "" + this.lastName)
    }
};

let fullerName = (firstName, lastName) => {
    person.firstName = firstName;
    person.lastName = lastName;
   return `Hello ${person.firstName} ${person.lastName}`;
}

console.log(person.fullName('Not', 'Sure'))
 */

// Write a fat arrow function that takes an array and sorts alphabetically, return the sorted array, and display it in the console.

let sortArray = (array) => {
    if (array.length) {
        console.log(true)
    }
    let newArray = array.sort((a,b) => a-b)
return newArray }

// array_1 = ['orange', 'Banana', 'aPple', 'gUava', 'kiwi']

// console.log(sortArray(array_1));

let Arr2 = [1,5,3,11,31,12,52]


console.log(sortArray(Arr2))

arr1 = ['george', 'tony', 'marty']
arr2 = ['spice', 'rex']
arr2 = [...arr1,...arr2]
console.log(arr2)