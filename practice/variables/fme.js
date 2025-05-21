const readline = require('readline-sync');


let password;
do {
   password = readline.question( "Enter your password:");
}  while (password === "JavaScript99");
  if (!password){
  console.log("Guess again.");
  }
  else if (password) {
console.log("Access granted.")

  }