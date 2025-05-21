let nums = [1, 3, 4, 6, 3, 6];

let numsCopy = nums; // actually an alias

let numsTrueCopy = [...nums];

console.log(nums == numsCopy);
console.log(nums === numsCopy);

console.log(nums === numsTrueCopy);