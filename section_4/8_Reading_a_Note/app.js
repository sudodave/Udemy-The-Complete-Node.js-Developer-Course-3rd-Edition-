const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

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
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
      title: {
        describe: 'Title of note to be removed',
        demandOption: true,
        type: 'string',
      }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes();
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
      title: {
        describe: 'Reads the Note In the terminal',
        demandOption: true,
        type: 'string',
      }
    },
    handler(argv) {
        notes.readNote(argv.title)
    },
})

yargs.parse()
