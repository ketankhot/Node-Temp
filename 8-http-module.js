// Getting the HTTP server
const http = require("http");

// Creating the server instance and listening on port 8080
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("This is Home Page");
    res.end();
    return; // Ensures no further response handling happens
  } else if (req.url === "/about") {
    res.write("This is About Page");
    res.end();
    return;
  }

  // Default case for other routes
  res.writeHead(404, { "Content-Type": "text/html" }); // Setting content type for HTML
  res.end(`
    <h1>Something Went Wrong!</h1>
    <p>There is no information available</p>
    <a href='/'>Back to Home</a>
  `);
});

// Listening on port 5173
server.listen(5173);

// Printing the HTTP response
console.log("Server is running on port 5173");
