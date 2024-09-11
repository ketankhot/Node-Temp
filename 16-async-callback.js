const fs = require("fs");

// Create a new file
async function readfiles() {
  try {
    const data_one = await fs.readFileSync("./content/first.txt", "utf8");
    const data_two = await fs.readFileSync("./content/second.txt", "utf8");
    const data_three = await fs.readFileSync("./content/result.txt", "utf8");
    console.log(data_one, data_two, data_three);
  } catch (error) {
    console.log(error);
  }
}

// Calling the function
readfiles();
