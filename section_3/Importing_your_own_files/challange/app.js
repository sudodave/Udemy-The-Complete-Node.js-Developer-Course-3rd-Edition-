
 //
 // Challange: Degine and use a function in a new fie`
 //
 //  1. Create a new fuke cakked notes.js
 //  2. Create getNotes function that returns "your notes"
 //  3. Export getNotes function.
 //  4. From app.js load in and call the fuction printing message to console.
getNotes = require('./notes');

const msg = getNotes();

console.log(msg)
