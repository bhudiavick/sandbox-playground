// arrays-demo.ts
const numbers = [1, 2, 3, 4, 5];

// -----------------------------
// MAP DEMO
// -----------------------------
console.log("=== MAP DEMO ===");

const squaresExpanded = numbers.map(function (n, index, array) {
  console.log(
    "map callback -> value:",
    n,
    "| index:",
    index,
    "| array:",
    array
  );
  return n * n;
});

console.log("Squares result:", squares);

// -----------------------------
// FILTER DEMO
// -----------------------------
console.log("\n=== FILTER DEMO ===");

const evensExpanded = numbers.filter(function (n, index, array) {
  console.log(
    "filter callback -> value:",
    n,
    "| index:",
    index,
    "| array:",
    array
  );
  return n % 2 === 0; // keep only even numbers
});

console.log("Evens result:", evens);

// -----------------------------
// REDUCE DEMO
// -----------------------------
console.log("\n=== REDUCE DEMO ===");

const sumExpanded = numbers.reduce(function (accumulator, n, index, array) {
  console.log(
    "reduce callback -> acc:",
    accumulator,
    "| value:",
    n,
    "| index:",
    index,
    "| array:",
    array
  );
  return accumulator + n;
}, 0); // start accumulator at 0

console.log("Sum result:", sum);

// -----------------------------
// CHAINED DEMO (filter + map + reduce)
// -----------------------------
console.log("\n=== CHAINED DEMO ===");

const result = numbers
  .filter(n => {
    console.log("chained filter ->", n);
    return n % 2 === 0;
  })
  .map(n => {
    console.log("chained map ->", n);
    return n * n;
  })
  .reduce((acc, n) => {
    console.log("chained reduce -> acc:", acc, "| value:", n);
    return acc + n;
  }, 0);

console.log("Final chained result:", result);
