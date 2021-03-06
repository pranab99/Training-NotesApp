const notes = require('./notes');
const yargs = require('yargs');
const { demandOption } = require('yargs');


//Creating add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builer: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'Body of the Note',
            demandOption: true,
            type: 'string'
        }

    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)

    }
})


//Creating remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builer: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }

    },
    handler: function (argv) {
        notes.removeNote(argv.title);
    }
});


//Creating list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        notes.listNote()
    }
});

//Creating read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builer: {
        title: {
             describe: 'Note Title',
             demandOption: true,
             type: 'string'

        }

    },
    handler: function (argv) {
        notes.readNote(argv.title)
    }
});


// if(command === "add"){
//     console.log("Adding note!");
// }
// else if(command === "remove"){
//     console.log("Removing note!");
// }

yargs.parse();
// console.log(yargs.argv);