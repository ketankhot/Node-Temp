// Creating the HTTP and FS Module variable
const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });

    // Creating the ReadStream
    const readableStream = fs.createReadStream("./content/httpText.txt", {
      encoding: "utf8",
    });
    // Piping the ReadStream to the Response
    readableStream.pipe(res);

    // Error handling
    readableStream.on("error", () => {
      res.writeHead(500);
      res.end(JSON.stringify({ error: "Error reading file" }));
    });
  })
  .listen(8000);
