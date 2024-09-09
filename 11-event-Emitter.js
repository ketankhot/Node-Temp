const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

// Event listener
eventEmitter.on("message", function () {
  console.log("This is a message from Emitter function");
});

eventEmitter.emit("message");
