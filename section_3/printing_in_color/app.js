const chalk = require('chalk');

console.log(chalk.green('Success!!'));

//
// challenge: use the clak library in your project
//
// 1. install version 2.4.1. of chalk
// 2. Load chalk into app.js
// 3. Use it to print the string "sucess!" to the console in green
// 4. Test your work
//
// Bonus: Use docs to messa around with other sytles. Make text Bold and inersed.

const greeting = chalk.green.inverse.bold('Success!');
console.log(greeting)
