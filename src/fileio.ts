import * as fs from "fs";

const data = { id: 1, task: "Learn TypeScript", done: false };

// Write to file
fs.writeFileSync("todo.json", JSON.stringify(data, null, 2));
console.log("Wrote todo.json");

// Read from file
const raw = fs.readFileSync("todo.json", "utf-8");
const todo = JSON.parse(raw);
console.log("Read from file:", todo);
