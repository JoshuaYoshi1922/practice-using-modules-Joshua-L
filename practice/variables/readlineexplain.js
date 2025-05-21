const readline = require('readline-sync'); // Pulls in the
//readline-sync functions that allow us to get user input
let userString = readline.question("Please enter a word or phrase: ");
let index = readline.questionInt("Enter a character index to access: ");
// Prompts the user for a string and an index, ensuring that the
//index’s data type is an integer
let firstChar = userString[index]; // Uses bracket notation to find
//the first character of the user’s string, using the user’s index
console.log("You have chosen " + firstChar); // Prints the user’s
//character choice
