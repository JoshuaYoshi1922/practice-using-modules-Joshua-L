const readline = require('readline-sync');

const hasTorch = true;
const hasMap = true;
const noMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");



if (choice === "mountains" && hasTorch) {
    console.log("You safely navigate through the dark mountains.");
  } else if (choice === "mountains" && !hasTorch) {
    console.log("It's too dark to proceed. You decide to turn back.");

   
  } else if (choice === "village" || hasMap) 

 choice == 'village'

    console.log("You find your way to the village.");
    console.log("Walking through the muddy streets, an old lady trys to sell you an apple.");
    let playerChoice = readline.question("Buy apple from old lady, 'Yes?' or 'No?'");

    if (playerChoice == "Yes" && hasMap);{
               console.log("You take a bite from the apple and notice a piece of paper. The paper ends up being a Map!");
    hasMap == true;
    console.log("You now have a map to get home!")

    } else {
        (playerChoice == "No" && noMap);
        console.log("You decide to walk a long dark alley way.")
                  console.log("You keep walking until you find another old lady selling bread.");
        let buyBread = readline.question("Do you buy bread? 'Yes' or 'No?'");
     } if (buyBread === "Yes"){
       console.log("You are no longer hungry")
    }
        else
         (buyBread === "No") {
       console.log("You will starve to death.")
        }

      
       