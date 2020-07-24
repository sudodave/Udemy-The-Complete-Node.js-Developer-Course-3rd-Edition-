const chalk = require('chalk');
const yargs = require('yargs');


// Customize yargs version
yargs.version('1.1.0')


// add
 yargs.command({
   command: 'add',
   describe: 'Add a new note',
   builder: {
     title: {
       describe: 'Note Title',
       demandOption: true,
       type: 'string',
     },
     body: {
       describe: 'Body',
       demandOption: true,
       type: 'string',
     }
   },
   handler: function (argv) {
     console.log('Title: ' + argv.title)
  }
 })
// remove
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function (){
    console.log('Removing the note!')
  }
})
// ready
yargs.command({
  command: 'read',
  describe: 'reads a note',
  handler: function (){
    console.log('Reading the note!')
  }
})
// list
yargs.command({
  command: 'list',
  describe: 'list the notes',
  handler: function (){
    console.log('listing the note!')
  }
})


console.log(yargs.argv)
