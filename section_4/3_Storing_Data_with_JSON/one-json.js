const fs = require('fs');
// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
// }
//
// const book_JSON = JSON.stringify(book);
// const parsed_data = JSON.parse(book_JSON);
// fs.writeFileSync('1-json.json', book_JSON)

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);



//
// Challenge: Work with JSON and the file system
//
// 1. Load and parse the JSON data
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

// 2. Change the name and age property using your info
user.name = 'Mark';
user.age = '19';

// 3. Stringify the changed object and overwrite the original data
const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON);

// 4. Test your work by viewing data in the JSON file
  // Simply run node one-json.js in the terminal
