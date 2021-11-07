// What is the difference between import and require?

// One of the major differences between require() and import()
// is that require() can be called from anywhere inside the program 
// whereas import() cannot be called conditionally, it always runs at the beginning of the file

// const chalk = require('chalk')
// console.log(chalk.green.inverse.bold('a@a.com'));

const {method, otherMethod , thirdMethod} = require('./methods.js');
const add = method(5,1)
const minus = otherMethod(21,1)
const multiple = thirdMethod(5,3)
console.log('add ',add);
console.log('minus ',minus);
console.log('multiple ',multiple);