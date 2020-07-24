const fs = require('fs');
const chalk = require('chalk');


// Goal: Wire up list command
//
// 1. Create and export listNotes from notes.js
//    - "Your notes" using chalk
//    - Print note title fro each note
// 2. Call listNotes from command handler
// 3. Test your work!


// Customize yargs version
const getNotes = ()  => {
  return 'Your notes..';
}

// Create a command
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);

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

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notesToKeep.length < notes.length) {
    console.log(chalk.green.inverse('Note Removed!'))
    saveNotes(notesToKeep);
  }
  else {
    console.log(chalk.red.inverse('No Note Found!'))
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.inverse('Your Notes'));

  notes.forEach((note) => {
    console.log(note.title)
  })
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON)
};

const loadNotes = () => {
  try {
    const dataBuffer =  fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  }
  catch (e) {
    return [];
  }
};





module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
}
