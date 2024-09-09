// OS Module
const os = require("os");

// Info about current User
const currentUser = os.userInfo();
console.log(currentUser);

// System Uptime
// console.log(os.uptime());

// Current OS
const currentOS = {
  name: os.type(),
  release: os.release(),
  platform: os.platform(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
