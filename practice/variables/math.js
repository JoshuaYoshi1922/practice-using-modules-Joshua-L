

// 1)
// Absolute Value Calculation

function absoluteVal(a) {
    return Math.abs(a);
}
console.log('The absolute value of -45.67 is...' + absoluteVal(-45.67));
//Output The absolute value of -45.67 is...45.67


// Power Calculation

function calcPow(a, b) {
    return Math.pow(a, b)
}
console.log("5 to the power of 3 is..." + calcPow(5, 3));
//Output 5 to the power of 3 is...125


//Square Root Finder

function square(a) {
    return Math.sqrt(a);
}
console.log("The square root of 144 is..." + square(144));
//Output The square root of 144 is...12


// Maximum and Minimum Finder

function maxMin() {
    return {
        max: Math.max(a),
        min: Math.min(b)
    };
}
console.log("The maximum number betwee 3,78, 12, 0.5 and 27 will be..." + Math.max(3, 78, -12, 0.5, 27));
//Output The maximum number betwee 3,78, 12, 0.5 and 27 will be...78

console.log("The minimum number betwee 3,78, 12, 0.5 and 27 will be..." + Math.min(3, 78, -12, 0.5, 27));
//Output The minimum number betwee 3,78, 12, 0.5 and 27 will be...-12


// Random

function randNum(min, max) {
    return Math.random() * (max - min) + min;
}
console.log("A random numbner between 1 and 50 will be..." + randNum(1, 50))
//Output A random numbner between 1 and 50 will be...43.70041088478002


//  Custom Rounding

function roundDec(a) {
    return (Math.round(a * 100) / 100);
}

console.log("The number 23.67891 rounded down 2 decimal places is..." + roundDec(23.67891));
//Output The number 23.67891 rounded down 2 decimal places is...23.68