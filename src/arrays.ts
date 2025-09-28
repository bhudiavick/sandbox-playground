const nums = [1, 2, 3, 4, 5];

// map
const squares = nums.map(n => n * n);
console.log("Squares:", squares);

// filter
const evens = nums.filter(n => n % 2 === 0);
console.log("Evens:", evens);

// reduce
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum);
