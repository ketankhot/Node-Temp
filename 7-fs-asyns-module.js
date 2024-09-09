const { readFile, writeFile, appendFile } = require("fs");

// Read a file
readFile("./content/first.txt", "utf8", (result, error) => {
  if (error) {
    console.log(error);
    return;
  }
  // Reading the Data
  console.log(result);
});

// Write a file
const data = "This is the data I want to write in the file \n";
writeFile("./content/result-async.txt", data, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("File has been written successfully");
});

// Append data to a file

const appendData = "This is the additional data I want to append to the file";
appendFile("./content/result-async.txt", appendData, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Data has been appended successfully");
});
