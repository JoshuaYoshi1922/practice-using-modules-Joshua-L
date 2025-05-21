const companies= [
    {name: "Company one", category: "Finance", start: 1981, end: 2003},
    {name: "Company two", category: "Retail", start: 1992, end: 2008},
    {name: "Company three", category: "Auto", start: 1999, end: 2007},
    {name: "Company four", category: "Retail", start: 1989, end: 2010},
    {name: "Company five", category: "Technology", start: 2009, end: 2014},
    {name: "Company six", category: "Finance", start: 1987, end: 2010},
    {name: "Company seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company nine", category: "Retail", start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// forEach

// companies.forEach(function(company) {
//     console.log(company);
// });

// filter

// Get 21 and older

    // Old version
// let canDrink = [];  
// for (let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }

    // ES 5 verison
// const canDrink = ages.filter(function(age) {
//     if(age >= 21) {
//             return true;
//     }
// });

// const canDrink = ages.filter(age => age >= 21);  //arrow function one liner

// Filter retail companies

// const retailCompanies = companies.filter(function(company) {
//     if(company.category === 'Retail') {
//         return true;
//     }
// });

// const retailCompanies = companies.filter(company => company.category === 'Retail')

// Get started 80s Companies

// const eightiesCompanie = companies.filter(company => (company.start >= 1980 && company.start < 1990));


// Get companies that lasted ten years or more

// const lastedTenYears = companies.filter(company => (company.end -company.start >= 10));


// map

// Creat arry of company Names
// const companyNames = companies.map(function(company) {
//     return company.name;
// });

// Array of company name and start and end
// const testMap = companies.map(function(company) {
//     return `${company.name} [${company.start} - ${company.end}]`;
// });

// shorter way
// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]` );

// age square root
// const agesSquare = ages.map(age => Math.sqrt(age));

// const agesTimesTwo = ages.map(age => age * 2);

// const agesSquareTimesTwo = ages
//     .map(age => Math.sqrt(age))
//     .map(age => age * 2);


// sort
// sorting by start year
// const sortCompanies = companies.sort(function(c1, c2) {
//     if(c1.start > c2.start) {
//         return 1;
//       } else {
//         return -1;
//       }
//     });

// shorter way
    // const sortCompanies = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));

//sort ages

// just looks at first digit, 5 over 45
// const sortAges = ages.sort();

// correct order 
// const sortAges = ages.sort((a, b) => a - b);


// reduce

// Adding ages with for loop
let ageSum = 0
for(let i = 0; i< ages.length; i++) {
    ageSum += ages[i];
}

const ageSum = ages.reduce(function(total, age) {
    return total + age;
}, 0);

// shorter way
const ageSum = ages.reduce((total, age) => total + age, 0);

// Get total years  for all companies

// adding length of time for each company
// const totalYears = companies.reduce(function(total, company) {
//     return total + (company.end - company.start);
// }, 0);

//shorter way
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)



// Combine Methods

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0)


