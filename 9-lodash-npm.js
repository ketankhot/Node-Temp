const _ = require("lodash");

const items = [1, [2, [3, 4, [10, [50]]], 5, [6, 7], 8]];
const newArray = _.flattenDeep(items);
console.log(newArray);
console.log("this is node folder");
