// Task 1: Using forEach()

let favCities = ["Colorado Springs", "Chicago", "Honolulu", "Seattle","Tampa Bay"];
let upperCities = favCities.map(favCities => favCities.toUpperCase());

console.log(upperCities); // ['COLORADO SPRINGS', 'CHICAGO', 'HONOLULU', 'SEATTLE', 'TAMPA BAY']


//Task 2: Transforming with map()

let numbers = [1,2,3,4,5];
let squares = numbers.map(numbers => [numbers]);

console.log(squares);
    // [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ]


// Task 3: Filtering with filter()

let scores = [85,42,90,75,30,100];
let highScores = scores.filter(scores => scores >= 80 );
console.log(highScores);
    // [ 85, 90, 100 ]


    // Task 4: Finding with find() and findindex()

    let favoriteFood = ["Pho", "Eggrolls", "Sushi", "Pizza", "Burger"];
    let four = favoriteFood.find(favoriteFood => favoriteFood.charAt(4));

    console.log(four); // Eggrolls

    let foodIndex = favoriteFood.findIndex(food => food > "Eggrolls");

    console.log(foodIndex); // 0