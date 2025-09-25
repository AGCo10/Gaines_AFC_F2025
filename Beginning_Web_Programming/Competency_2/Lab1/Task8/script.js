// script.js
// Name: Adam Gaines
// Task8 - Shopping List Operations

// Step 1: Create an array of Strings named shoppinglist with hardcoded values.
let shoppingList = ["eggs", "butter", "flour"];

// Step 2: use fat arrow expression to declare a modifyItem function which will take two arguments.
const modifyItem = (list, newItem) => {
    // Step 3: Use the array.push() method to add the argument newItem to the list argument. The push method will append the item to the end of the array.
    list.push(newItem);

    // Step 4: Log the the console the updated shopping list.
    console.log("Updated shopping list:", list);
};

// Step 5: Use the prompt method to get an item from the user to be added to the shippingList array. Store this item as userItem variable.
const userItem = prompt("Enter a new item to add to the shopping list:");

// Step 6: Validate the user's input before proceeding to the function.
if (!userItem) {
    console.log("Error: You must enter a valid item.");
} else {
    // Step 7: Call the modifyItem function passing the shoppingList array and new userItem variable as arguments.
    modifyItem(shoppingList, userItem);
}