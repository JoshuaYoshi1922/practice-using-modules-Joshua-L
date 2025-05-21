// Task 1: Create the Order Sytem.

var menu = [
    ["Latte", "Tea", "Espresso"],
    ["Croissant", "Muffin", "Bagel"]
 ];

 // Task 2: Log the number of drinks and number of pastries by using .length on each row.

 for (let i = 0; i < menu.length; i++);
 console.log(menu[1]); // ['Croissant', 'Muffin', 'Bagel']
 console.log(menu[0]); // ['Latte', 'Tea', 'Espresso']

 // Task: Access Orders Using Bracket Notation.

console.log(menu[0][1]); // Order 1 = Tea and Bagel
console.log(menu[1][2]);

console.log(menu[0][0]); // Order 2 = Latte and Muffin
console.log(menu[1][1]);

console.log(menu[0][2]);// Order 3 = Espresso and Croissant
console.log(menu[1][0]); 

// Task 4: Access Orders Dynamically with Variables

let drinkRow = 0
let drinkcolumn = 2
console.log(menu[0][2]); // Espresso

let foodRow = 1
let foodColumn = 0
console.log(menu[1][0]); // Croissant

// Task 5: Loop

for (let i = 0; i < menu.length; i++) {
    for (let j = 0; j < menu[i].length; j++) {
    console.log(menu[i][j]);
    }
   }

// Task 6: Add a New Order & Track Length

let menuLeng = menu[0].push("flat white");
console.log(menu[0]) // [ 'Latte', 'Tea', 'Espresso', 'flat white' ]

console.log(menu[0].length) // 4

let newRow = 0;
let newColumn = 3;
console.log(menu[0][3]); // flat white
