const readline = require('readline-sync');

let password = "secret";
do {
   guess = readline.question( "Enter your password:");
}  while (password !== "secret");

     if (guess === password);{
     console.log("Acess granted.");
    } 
    
       