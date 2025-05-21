const readline = require('readline-sync'); 
  

// 1)
// Absolute Value Calculation

const absoluteValue = function absoluteVal(a) {
    return Math.abs(a);
};
 {
const inputNum = readline.questionFloat("Please input number a negative number to find the absolute value ");
const name = readline.question(`Find the value of ${inputNum}`);

console.log(`The absolute value of ${inputNum} is...` +  absoluteValue(inputNum));
 
//Output The absolute value of -45.67 is...45.67
};

// Power Calculation
 {
let calculatePower = function calcPow(a, b) {
    return Math.pow(a, b)
};
const inputNum1 = readline.questionInt("Please input first number to calculate Power of ");
const inputNum2 = readline.questionInt("Please input second number ");
const name = readline.question(`What is the power of ${inputNum1} to ${inputNum2}?`);

 console.log(`The power of ${inputNum1} to ${inputNum2} is... ` +  calculatePower(inputNum1, inputNum2));

//Output 5 to the power of 3 is...125
};

//Square Root Finder
 {
function square(a) {
    return Math.sqrt(a);
}
 const inputNum = readline.questionInt("Please input number to find the square root ");
 const name = readline.question(`what is the square root of ${inputNum}?`);

 console.log(`The square root of ${inputNum} is...` +  square(inputNum));

//Output The square root of 144 is...12
};

// Maximum and Minimum Finder

function maxMin() {
    return {
        max: Math.max(a),
        min: Math.min(b)
    };
};
 {
const inputNum1 = readline.questionInt("Please input first number for max ");
const inputNum2 = readline.questionInt("Please input second number for max ");
const inputNum3 = readline.questionInt("Please input third number for max ");
const inputNum4 = readline.questionInt("Please input fourth number for max ");
const inputNum5 = readline.questionInt("Please input fifth number for max ");
const name = readline.question(`What is the maximum number between ${inputNum1}, ${inputNum2}, ${inputNum3}, ${inputNum4}, ${inputNum5}?`);

 console.log(`The maximum number between, ${inputNum1}, ${inputNum2}, ${inputNum3}, ${inputNum4},${inputNum5} is... ` +  Math.max(inputNum1, inputNum2, inputNum3, inputNum4, inputNum5));
 //Output The maximum number between 3,78, 12, 0.5 and 27 will be...78
};
 {
const inputNum1 = readline.questionInt("Please input first number for min ");
const inputNum2 = readline.questionInt("Please input second number for min ");
const inputNum3 = readline.questionInt("Please input third number for min ");
const inputNum4 = readline.questionInt("Please input fourth number for min ");
const inputNum5 = readline.questionInt("Please input fifth number for min ");
const name = readline.question(`What is the mininum number between ${inputNum1}, ${inputNum2}, ${inputNum3}, ${inputNum4}, ${inputNum5}?`);

 console.log(`The minimum number between, ${inputNum1}, ${inputNum2}, ${inputNum3}, ${inputNum4},${inputNum5} is... ` +  Math.min(inputNum1, inputNum2, inputNum3, inputNum4, inputNum5));
//Output The minimum number betwee 3,78, 12, 0.5 and 27 will be...-12
};

// Random Number

function randNum(min, max) {
    return Math.random() * (max - min) + min;
};
 {
const inputNum1 = readline.questionInt("Please input first mininum number ");
const inputNum2 = readline.questionInt("Please input second mininum number ");
const name = readline.question(`Get random number between ${inputNum1} and ${inputNum2}?`);

 console.log(`A random number between ${inputNum1} an ${inputNum2} will be... ` +  randNum(inputNum1, inputNum2));
//Output A random numbner between 1 and 50 will be...43.70041088478002
};

//  Custom Rounding

function roundDec(a) {
    return (Math.round(a * 100) / 100);
};
 {
const inputNum = readline.questionFloat("Please input decimal number ");
const name = readline.question(`Round ${inputNum} to 2 decimal places`);

console.log(`The absolute value of ${inputNum} is...` +  roundDec(inputNum));

//Output The number 23.67891 rounded down 2 decimal places is...23.68
};