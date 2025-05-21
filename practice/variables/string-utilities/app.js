import { capitalize, reverse, contains } from './stringUtils.js';


try {

console.log(capitalize("royals"));   
// Output: Royals

console.log(reverse("powerrangers"));
// Output: sregarrewop

console.log(contains("Let's Go Pikachu", "Go"))
// Output: true
}

catch (err) {
    console.log("oopsies");
}


