// Read file with synchronization function
const { readFileSync, writeFileSync } = require("fs");

// Read file with synchronization function from file
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first, second);

// Now write file with synchronization function
setTimeout(() => {
  const result = `Hello from Node.js\n${first}\n${second}`;
  writeFileSync("./content/result-sync.txt", result);
  console.log("File written successfully");
}, 2000);
