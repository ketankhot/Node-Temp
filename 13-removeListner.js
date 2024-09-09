// Import the events module
const EventEmitter = require("events");

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define a listener function
const greetListener = () => {
  console.log("This is a one-time greeting.");
};

// Register the 'greet' event listener
eventEmitter.on("greet", greetListener);

// Emit the 'greet' event
eventEmitter.emit("greet");

// Remove the 'greet' event listener
eventEmitter.removeListener("greet", greetListener);

// Emitting 'greet' again will not trigger the listener as it has been removed
eventEmitter.emit("greet");
