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

// Does every number pass condition?
console.log("every even?", nums.every(n => n % 2 === 0)); // false

// Does at least one number pass condition?
console.log("some even?", nums.some(n => n % 2 === 0)); // true

const users = ["alice", "bob", "charlie"];

const found = users.find(u => u.startsWith("b"));
console.log("find ->", found); // "bob"

const index = users.findIndex(u => u === "charlie");
console.log("findIndex ->", index); // 2

const nested = [[1, 2], [3, 4], [5]];
console.log("flat ->", nested.flat()); // [1, 2, 3, 4, 5]

// Flatten + transform in one step
const phrases = ["hello world", "foo bar"];
const words = phrases.flatMap(str => str.split(" "));
console.log("flatMap ->", words); // ["hello", "world", "foo", "bar"]

const numsCompare = [5, 1, 10, 2];

// Default sort = string sort
console.log("sort default ->", numsCompare.sort()); // [1, 10, 2, 5]

// Numeric sort - always give a comparator for numbers, otherwise it sorts alphabetically
console.log("sort numeric ->", numsCompare.sort((a, b) => a - b)); // [1, 2, 5, 10]

const arr = [10, 20, 30, 40, 50];

// slice = copy part of array
console.log("slice ->", arr.slice(1, 3)); // [20, 30]

// splice = modify array in place
const removed = arr.splice(2, 2); // remove 2 items from index 2
console.log("removed ->", removed); // [30, 40]
console.log("after splice ->", arr); // [10, 20, 50]

const parts = ["playwright", "is", "fun"];
console.log("join ->", parts.join(" ")); // "playwright is fun"

const csv = "a,b,c";
console.log("split ->", csv.split(",")); // ["a", "b", "c"]

const coords = [100, 200, 300];
const [x, y] = coords;

console.log("x:", x, "y:", y); // x: 100 y: 200

const a1 = [1, 2];
const b = [3, 4];

console.log("concat ->", a1.concat(b)); // [1,2,3,4]
console.log("spread ->", [...a1, ...b]); // [1,2,3,4]

const numsDuplicate = [1, 2, 2, 3, 3, 4];
const unique = [...new Set(numsDuplicate)];
console.log("unique ->", unique); // [1, 2, 3, 4]

// Pretend we scraped this from page.locator("li").allTextContents()
const items = ["Save", "Cancel", "Edit", "Delete"];

// Filter only actions with 6+ letters
const longOnes = items.filter(i => i.length >= 6);
console.log("long items ->", longOnes); // ["Cancel", "Delete"]

// Map to uppercase
const upper = items.map(i => i.toUpperCase());
console.log("upper ->", upper); // ["SAVE", "CANCEL", "EDIT", "DELETE"]

// Reduce into one string
const joined = items.reduce((acc, i) => acc + " | " + i);
console.log("joined ->", joined); // "Save | Cancel | Edit | Delete"

// Here’s what happens step by step:

// Because no initialValue is given, reduce uses the first element as the starting acc.

// acc = "Save"

// i = "Cancel" (second element)

// First iteration:

// return "Save | Cancel"

// Second iteration:

// acc = "Save | Cancel"

// i = "Edit"

// return "Save | Cancel | Edit"

// Third iteration:

// acc = "Save | Cancel | Edit"

// i = "Delete"

// return "Save | Cancel | Edit | Delete"

// ✅ Final result → "Save | Cancel | Edit | Delete"

// Safer version (with initialValue)

// If you provide an initialValue, you have full control:

// const joined = items.reduce((acc, i) => acc + " | " + i, "");


// Step by step:

// acc = "" (initial value), i = "Save" → return " | Save"

// Next: acc = " | Save", i = "Cancel" → return " | Save | Cancel"

// Next: acc = " | Save | Cancel", i = "Edit" → return " | Save | Cancel | Edit"

// Next: acc = " | Save | Cancel | Edit", i = "Delete" → return " | Save | Cancel | Edit | Delete"

