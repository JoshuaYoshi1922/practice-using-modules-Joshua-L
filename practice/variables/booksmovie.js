// Task 1:

let booksMovies = [
    ["DogMan", "Moana", "The Game of Thrones"],
    ["The Notebook", "Captain Underpants", "Batman"],
    ["Thomas and Friends", "TMNT", "Superman"]
   ];

// Task 2:

console.log(booksMovies[0]); // ['DogMan', 'Moana', 'The Game of Thrones']
console.log(booksMovies[1]); // ['The Notebook', 'Captain Underpants', 'Batman']
console.log(booksMovies[2]); // ['Thomas and Friends', 'TMNT', 'Superman']


// Task 3

console.log(booksMovies[0][2]); // The Game of thrones
console.log(booksMovies[1][1]); // Captain Underpants
console.log(booksMovies[2][2]); // Superman

// Task 4

for (let i = 1; i < booksMovies.length; i++) {
    
    console.log(booksMovies[i]); // [ 'The Notebook', 'Captain Underpants', 'Batman' ]
                                 // [ 'Thomas and Friends', 'TMNT', 'Superman' ]
    }
