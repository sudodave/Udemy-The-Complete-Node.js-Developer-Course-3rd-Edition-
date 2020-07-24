const chalk = require('chalk');
const yargs = require('yargs');


// Customize yargs version
yargs.version('1.1.0')


// add
 yargs.command({
   command: 'add',
   describe: 'Add a new note',
   handler: function () {
     console.log('Adding a new note!')
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
