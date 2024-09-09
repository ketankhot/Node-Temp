const EventEmitter = require("events");
// Creating the EventEmitter instance
const eventEmitter = new EventEmitter();

// Registering event listener On Method
eventEmitter.once("status", (statusCode, message) => {
  console.log("Status message ");
  console.log(`Status Code: ${statusCode}`);
  console.log(`Message: ${message}`);
});

// Calling the EventEmitter
eventEmitter.emit("status", 200, "OK");
