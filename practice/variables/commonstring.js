//Starter Code
// Task 1
let inputString1 = "Code";
let firstCodePoint = inputString1.charCodeAt(0); // Your code here
let thirdCodePoint = inputString1.charCodeAt(3); // Your code here

// Task 2
let codes = [72,101,108];
let wordFromCodePoints = String.fromCharCode(codes[0]) + String.fromCharCode(codes[1]) + String.fromCharCode(codes[2]) + String.fromCharCode(codes[2]); // Your code here

// Task 3
let inputString2 = "Launch";
let codes1 = [76, 97, 117, 110, 99, 104,];
let swappedString = String.fromCharCode(codes1[5]) + String.fromCharCode(codes1[1]) + String.fromCharCode(codes1[2]) + String.fromCharCode(codes1[3]) + String.fromCharCode(codes1[4]) + String.fromCharCode(codes1[0]); // Your code here


// Log all results
console.log({
  firstCodePoint, // 67
  thirdCodePoint, //101
  wordFromCodePoints, //'Hell'
  swappedString, // 'hauncL
});