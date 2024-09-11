const fs = require("fs");

// Create the readFileStream instance
const readableStream = fs.createReadStream("./content/source.txt", "utf8");

// Create the writeFileStream instance
const writableStream = fs.createWriteStream("./content/destination.txt");

// Handle the 'data' event of the readable stream
readableStream.pipe(writableStream);

// Handle the 'error' event of the readable stream
readableStream.on("error", (error) => {
  console.error("An error occurred:", error);
});

// Handle the 'end' event of the readable stream
readableStream.on("end", () => {
  console.log("File copied successfully");
  console.log("There is nothing to copy from");
});

// Handle the 'finish' event of the writable stream
writableStream.on("finish", () => {
  console.log("File written successfully");
});
