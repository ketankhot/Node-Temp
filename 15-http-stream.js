const { createReadStream } = require("fs");
const stream = createReadStream("./content/bigData.txt", "utf8");
stream.on("data", (data) => {
  console.log("DATA", data);
});

stream.on("error", () => {
  console.log("Stream Ended");
});
