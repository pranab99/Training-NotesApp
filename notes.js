const fs = require('fs');
// const chalk = require('chalk');
const getNotes = () => {

}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    });

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log("New note added!");
    } else {
        console.log("Note title already taken!");
    }
};


const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note) {

        return note.title !== title;

    });


    if (notes.length === notesToKeep.length) {
        console.log("No note found!");
    } else {
        console.log("Note removed!");
        saveNotes(notesToKeep);
    }

}

const listNote = () => {
    const notes = loadNotes();
    
    notes.forEach(element => {
        console.log(element.title)

    });

    
}
const readNote = (title) => {
    const notes = loadNotes();
    var count = 0;
    notes.forEach(element => {
        if (title === element.title) {
            console.log(element.title);
            console.log(element.body);
            count = 1;
        }

    });

    if (count === 0) {
        console.log("Note doesnot exist");
    }
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)

};


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

    } catch (e) {
        return [];
    }
};


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}