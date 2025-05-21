let hasTorch1 = true;
let hasMap1 = false;
let hasSword = false;
let hasCompass = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice1 = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains") {
    if (hasTorch) {
        console.log("You safely navigate through the dark mountains.");
        console.log("You encounter a wild beast! Do you fight or run?");
        let action = readline.question("Choose 'fight' or 'run': ");
        if (action === "fight" && hasSword) {
            console.log("You bravely fight the beast with your sword and win!");
        } else if (action === "fight" && !hasSword) {
            console.log("You try to fight but are unarmed. The beast overpowers you. Game over.");
        } else {
            console.log("You run away safely, but the beast chases you back to the starting point.");
        }
    } else {
        console.log("It's too dark to proceed. You decide to turn back.");
    }
} else if (choice === "village" || hasMap) {
    console.log("You find your way to the village.");
    console.log("In the village, you see a marketplace and a blacksmith. Where do you go?");
    let villageChoice = readline.question("Choose 'marketplace' or 'blacksmith': ");
    if (villageChoice === "marketplace") {
        console.log("You buy a compass, which might help you navigate later.");
        hasCompass = true;
    } else if (villageChoice === "blacksmith") {
        console.log("The blacksmith offers you a sword. Do you take it?");
        let takeSword = readline.question("Choose 'yes' or 'no': ");
        if (takeSword === "yes") {
            console.log("You now have a sword!");
            hasSword = true;
        } else {
            console.log("You decline the sword and leave the blacksmith.");
        }
    }
} else {
    console.log("You get lost and wander aimlessly.");
}  