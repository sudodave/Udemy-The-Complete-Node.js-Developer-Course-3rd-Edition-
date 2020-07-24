const fs = require('fs');
const chalk = require('chalk');
// Challenge: Setup command option and function
//
// 1. Setup the remove command to take a required "--title" option
// 2. Create and export a removeNote function from notes.js
// 3. Call removeNote in remove command handler
// 4. Have removeNote log the title of the note to be removed
// 5. Test your work using: node app.js remove --title"some title"

// Second Challenge: Use chalk to provide userful logs for remove
//
// 1. If a note is removed, print "Note removed!" with a green background
// 2. if no note is removed, print "No note found!" with a red background


// Customize yargs version
const getNotes = function () {
  return 'Your notes..';
}

// Create aa command
const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
    })

    if (duplicateNotes.length == 0) {
      notes.push({
        title: title,
        body: body,
      })
      saveNotes(notes);
      console.log(chalk.green.inverse('New Note added!'));
    }
    else {
      console.log(chalk.red.inverse('Note title taken!'));
    }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON)
};

const loadNotes = function () {
  try {
    const dataBuffer =  fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  }
  catch (e) {
    return [];
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter(function (note) {
      return note.title !== title;
  })

  if (notesToKeep.length < notes.length) {
    console.log(chalk.green.inverse('Note Removed!'))
    saveNotes(notesToKeep);
  }
  else {
    console.log(chalk.red.inverse('No Note Found!'))
  }
};




module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
}
