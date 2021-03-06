const fs = require('fs');
const chalk = require('chalk');

// Goal: Wire up read command
//
// 1. Setup --title option for read command
// 2. Create readNote in notes.js
//    - Seatch for note by title
//    - Find note and print title (styled) and body (plain)
//    - No note found? Print error in red.
// 3. Have the command handler call the function
// 4. Test your work by running a couple commands


// Customize yargs version
const getNotes = ()  => {
  return 'Your notes..';
}

// Create a command
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
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

const readNote = (title) => {
  const notes = loadNotes();
  const noteToRead = notes.find((note) => note.title === title);

  if (noteToRead) {
    console.log(chalk.green.inverse(noteToRead.title), '\n')
    console.log(noteToRead.body)
  }
  else {
    console.log(chalk.red.inverse('Error: Note does not exist'))
  }
}

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
  readNote: readNote,
}
