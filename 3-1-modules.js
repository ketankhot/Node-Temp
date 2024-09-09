// CommonJS => In CommonJS every file is module (by Default)
// MOdule => Encapsulated Code (Share only Minimum Code)

// const { praneel, ranjana } = require("./3-2-module-names");
const names = require("./3-2-module-names");
const sayHello = require("./3-3-module-function");
// console.log(names);

sayHello("Ketan");
sayHello(names.praneel);
sayHello(names.ranjana);
