let userName = "Bruce";
let age = 27;
let subScrip = true;
let userLoc = {city:"Gotham City"};
let userHobb = ["MMA", "Cars"];

// Task 1 Create the Profile

let studentInfo = [userName, age, subScrip, userLoc, userHobb];
console.log(studentInfo); // ["Bruce", 27, true, {city: 'Gotham City'}, ['MMA, 'Cars']]

// Task 2 Access and Log Profile Details

let nameHob = [userName, userHobb[1]];
console.log(nameHob); // ['Bruce', 'Cars'];

// Task 3 Modify the Profile

let newAge = 29
let newHobb = ["MMA", "Cars", "Planes"];

let newStu = [userName, newAge, subScrip, userLoc, newHobb];
console.log(newStu)