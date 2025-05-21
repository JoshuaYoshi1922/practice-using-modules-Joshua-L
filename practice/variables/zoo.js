let zoo = {
   giraffe: {
       species: "Reticulated Giraffe",
       name: "Cynthia",
       age: 15
   },
   tortoise: {
       species: "Galapagos Tortoise",
       name: "Pete",
       age: 85
   },
   poop: {
    species:" poopyiotus",
    name: "poops",
    age: 4
   }
};

for (let animal in zoo) {
   console.log("Animal:", animal);
   for (let key in zoo[animal]) {
       console.log(key + ": " + zoo[animal][key]);
   }
}