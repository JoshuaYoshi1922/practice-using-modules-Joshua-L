// 1) Values, Data Types, and Operations
// When user signs into the application, they a are greeted by a welcome greeting.

const readline = require('readline-sync'); // Lesson 4 readline-sync
let userName = "Joshua"; // Lesson 2 creating variables and proper naming.
let name = readline.question("What is your User Name?") // User will type in name and it output in cosole log.
console.log("Hello, " + name + "!" + " What card are we looking for today?") // Prints out message to screen
// [Hello, Joshua! What card are we looking for day?]


// 2) Stringing Characters Together
// In the search bar, when someone does not capitalize the first letter of the specific card they a looking for,
// this method will capitalize it automatically for them for more accurate searching in the string.

const readline = require('readline-sync');
let playerName = readline.question("Enter player name?"); // User will type in sports player or pokemon card name with the first letter in a lower case letter.
let searchName = playerName.charAt(0).toUpperCase() + playerName.slice(1); // Takes given name can converts first letter to upper case. Lesson 6
console.log(searchName); //Output first letter of given name will be capitalized for more accurate search.


// 3) Contol Structures and logic
// In the application when the user in signed it, the app will check to see if they are a paid subscriber or not. 


let userName = "Joshua"; // Basic user profile for app
let age = 20
let city = "Kansas City";
let paidSub = false; // Does not pay for subcription
let userProfile = [userName, age, city, paidSub];
console.log(userProfile); // [ 'Joshua', 20, 'Kansas City', false ]

if (paidSub === true){
    console.log("You are a paid Subcriber. Enjoy all the great paid features!"); 
}
else {
    console.log("Please subcribe for more premium features!"); // Since I am not a paid subscriber, I will get this output asking to pay for premium features.

}

// 4) Working with Loops
// This will prompt the user for their username and password for security.
//  Until correct password is give, do while loop will just through until correct password is given

const readline = require('readline-sync'); // will prompt user for their credentials 
let userName = "Josh";
let password = "JavaDaHut99";
readline.question("Enter username ");
do {                                            
  password = readline.question("Enter your password:");
} while (password !== "JavaDaHut99");      // will loop through until the password is correct
console.log("Welcome, " + userName + "."  + " It's card time!"); // Output: Welcome, Josh. It's card time!


// 5) Building Arrays
//  When sports card or pokemon cards are either scanned in or typed, it will build a multidimensial object type array. 
//  Good for organization

const baseballPlayers = [
    {playerName: "Bobby Wit Jr", position: "Shortstop", teamName: "Royals"},
    {playerName: "Mike Trout", position: "Centerfield", teamName: "Angels"},
    {playerName: "Salvatore Perez", position: "Catcher", teamName: "Royals"},
    {playerName: "Shohei Ohtani", position: "Pitcher", teamName: "Dodgers"}
];


// 6) Using Arrays
// Users can use the array to search for a specific team or player using the filter feature for quick searching


const baseballPlayers = [
    {playerName: "Bobby Wit Jr", position: "Shortstop", teamName: "Royals"},
    {playerName: "Mike Trout", position: "Centerfield", teamName: "Angels"},
    {playerName: "Salvatore Perez", position: "Catcher", teamName: "Royals"},
    {playerName: "Shohei Ohtani", position: "Pitcher", teamName: "Dodgers"}
];


let royals = baseballPlayers.filter(team => team.teamName === "Royals"); // using the .filter method from lesson 5 to search for all players from the "Royals" in the array

console.log(royals);
// Output: [  {
//    playerName: 'Bobby Wit Jr',
//    position: 'Shortstop',
//    teamName: 'Royals'
//  },
// {
//    playerName: 'Salvatore Perez',
//   position: 'Catcher',
//    teamName: 'Royals'
//  }
//]
