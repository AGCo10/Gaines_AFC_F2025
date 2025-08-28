console.log("What is your name?");

// variables can be done in multiple ways
// var (dont use me)
// let - scope base
// const - not scope based

let dog = "woof"
let cat = "meow"

// JS does not care about semi-colons. They are considered implied, but you CAN still add it.

{
    let dog = "meow"
    let cat = "woof"
}
console.log(dog !== cat)

let age = 24

console.log(age)
console.log((typeof age))

// Number Methods

let input = "24"
console.log(typeof input)
let parsedNumber = Number(input)
console.log(typeof parsedNumber)



/*
    falsey = 0, "", false, undefined, null
truthy = 1, " ", if it exists, it is true.
*/

