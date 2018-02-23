const fs = require('fs'); // filesystem
// const os = require('os');
const _ = require('lodash'); // _ is usually used to load lodash
const notes = require('./notes.js')
const yargs = require('yargs');

var argv = yargs
            .command('add', 'Add a new note', {
                title: {
                    describe: 'Title of note',
                    demand: true
                }
            })
            .help()
            .argv; // parses the arguments and returns them

// var user = os.userInfo(); // OS returns the info on user
// console.log(user);

// fs.appendFile('greetings.txt', `Hello ${user.username}. You are ${notes.age}`); // creates a file if doesnt exist and appends to it
// var res = notes.addNote();
// console.log(res);

// var res = notes.addTwoNums(10, 15);
// console.log(res);
// console.log("Result:", notes.addTwoNums(100, 200));

// console.log(_.isString(true));
// console.log(_.isString("Andrew"));
// var filteredArray = _.uniq(['Andrew', 1, 'Andrew', 1, 2, 3, 4, 'Mike']);
// console.log(filteredArray);

// console.log(process.argv); // argument vector
// var command = process.argv[2];
var command = argv._[0]; // this is equivalent to: var command = process.argv[2];
if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("Note created");
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    }
    else {
        console.log("Failed to add the note");
    }
} else if (command === 'list') {
	var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
	var note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
}
else if (command === 'remove') {
	var noteRemoved = notes.removeNote(argv.title);
    var msg = noteRemoved ? "Note was removed" : "Note not found";
    console.log(msg);
}
