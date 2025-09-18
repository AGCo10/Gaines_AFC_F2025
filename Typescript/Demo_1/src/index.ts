import {calcArea, calcPerimeter} from "./helpers";

let dog = "woof";


console.log(dog)

let number= 5

let isMarried= false;
let wasMarried;

const getFullName = (fname, lname) => {
    return `${fname} ${lname}`
}

console.log(isMarried)
console.log(getFullName("Adam", "Games"))

//Arrays
let names = ["George", "Martha", "Henry"]
let newNames = ["Bob", "Johnny", "Sue"]

let nums = [1,2,3]
let numsTwo= [4,5,6]

let num1 = 5
const num2 = 10
console.log(num1 + num2)

let result: number = calcArea(4,5);
let perimeter: number = calcPerimeter(10,13);