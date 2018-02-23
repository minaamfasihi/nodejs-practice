console.log('Starting notes.js');
const fs = require('fs');

// console.log(module);
// module.exports.age = 25;

// module.exports.addNote = () => {
// 	console.log("addNote");
// 	return "New note";
// }

module.exports.addTwoNums = (a, b) => {
	return a + b;
}

// var addNote = (title, body) => {
// 	console.log("Adding title:", title, body);
// };

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
        return notes;
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var logNote = (note) => {
    // debugger;
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    }; //in es6, we can write the key, value pair as one value if both their names are same
    // var duplicateNotes = notes.filter((note) => {
    //     return note.title === title;
    // });
    // above can be shortened to
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
	console.log('Get all notes');
    return fetchNotes();
};

var getNote = (title) => {
	console.log('Get note with title', title);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

var removeNote = (title) => {
	console.log('Removing note', title);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title != title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
    logNote
};
