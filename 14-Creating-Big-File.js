const { writeFileSync } = require("fs");
for (let i = 0; i <= 100; i++) {
  writeFileSync("./content/bigData.txt", `hello world ${i}\n`, { flag: "a" });
}
