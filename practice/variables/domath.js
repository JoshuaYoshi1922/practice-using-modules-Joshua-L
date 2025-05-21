const readline = require('readline-sync'); 

let multiply = {
    name: "Multiplication",
    type: "Arithmetic",
    doTheMath: function(a, b) {
        return a * b;
       } 
    }
console.log(multiply.doTheMath(num1, num2));