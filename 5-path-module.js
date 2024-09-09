const path = require("path");
console.log(path.sep);

// Creating the file path with join method
const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);

// basename of the file
console.log(`basename : ${path.basename(filePath)}`);

// dirname of the file
const absolutePath = path.resolve(
  __dirname,
  "content",
  "subfolder",
  "test.txt"
);
console.log(absolutePath);
