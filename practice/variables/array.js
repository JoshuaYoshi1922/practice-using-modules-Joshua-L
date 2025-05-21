//Task 1 - Initialize the Array

let theArray = Array(7);
let strArray = theArray.fill("Hello");
console.log(strArray); // ["Hello", "Hello", "Hello", "Hello", "Hello", "Hello", "Hello"]


// Task 2 - Update the Array


let arr = Array(9).fill("Sup", 7, 9);
console.log(arr); // [<7 empty items>, 'Sup', 'Sup]

// Task 3 - Populate the Array with a for Lop

let newArray = Array(5);
for (let i = 0; i < newArray.length; i++) {
    newArray[i] = i * 10;
    }
   console.log(newArray); // [0, 10, 20, 30, 40]