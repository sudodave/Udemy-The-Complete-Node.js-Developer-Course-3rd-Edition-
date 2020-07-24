
// const fs = require('fs')
//
// fs.writeFileSync('notes.txt', 'This file was created by node.js');

// Challenge: Append a message to notes.txt
//
// 1. Use appendFileSync to append the file
// 2. Run the script
// 3. Check your work by opeaning the file and viewing the appended text.

const fs = require('fs')
fs.appendFileSync('notes.txt', ' This is appended text added later')
