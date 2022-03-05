import { storageService } from "../../../services/async-storage-service.js";
import { utilService } from "../../../services/util-service.js";
const NOTE_KEY = 'notes';

createNotes()

export const noteService = {
    query,
    addNote,
    save,
    get,
    updateNote,
    removeNote,
    pinToUp,
    pinnedNotesQuery,
    duplicateNotes,
    saveNoteToStorage,
    createNote
}


function saveNoteToStorage(note) {
    return storageService.post(NOTE_KEY, note)
        // return utilService.saveToStorage(NOTE_KEY, note)
}

function updateNote(note) {
    return storageService.put(NOTE_KEY, note)
}

function query() {
    return storageService.query(NOTE_KEY)
}

function pinnedNotesQuery() {
    return storageService.query('pinnedNotes')

}

function save(note) {
    if (note.id) return storageService.put(NOTE_KEY, note);
    else return storageService.post(NOTE_KEY, note);
}

function get(id) {
    return storageService.get(NOTE_KEY, id);
}

function removeNote(id) {
    return storageService.remove(NOTE_KEY, id);
}

function pinToUp(id) {
    return storageService.put(NOTE_KEY, id);

}

function duplicateNotes(id) {
    return storageService.get(NOTE_KEY, id)
        .then(note => {
            // note.id = utilService.makeId(4)
            // console.log('check', note.id);
            return note
        })

}

function createNote() {
    var newNote = {
        id: "n101",
        type: "note-txt",
        isPinned: false,
        info: {
            txt: 'text',
        },
        style: {
            backgroundColor: 'pink'
        }

    }
    return newNote
}

function createNotes() {

    let notes = utilService.loadFromStorage(NOTE_KEY);
    if (!notes || !notes.length) {

        notes = [{
                id: "n101",
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: "Fullstack Me Baby!",
                },
                style: {
                    backgroundColor: 'pink'
                }
            },
            {
                id: "n102",
                type: "note-img",
                isPinned: false,
                info: {
                    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1",
                    title: "Bobi and Me"
                },
                style: {
                    backgroundColor: 'yellow'
                }
            },
            {
                id: "n103",
                type: "note-todos",
                isPinned: false,
                info: {
                    label: "Get my stuff together",
                    todos: [
                        { id: 1, txt: "Driving liscence", doneAt: null },
                        { id: 2, txt: "Coding power", doneAt: 187111111 }
                    ]
                },
                style: {
                    backgroundColor: 'lightgreen'
                }
            },
            {
                id: "n104",
                type: "note-video",
                isPinned: false,
                info: {
                    video: "https://www.youtube.com/watch?v=9BBqNcNqWOE",
                    title: "Faders Live!!!"
                },
                style: {
                    backgroundColor: 'lightblue'
                }
            },



        ];
        utilService.saveToStorage(NOTE_KEY, notes);

        console.log(notes);
        return notes;
    }
}


function addNote(newNote) {
    console.log('newNote', newNote);
    return storageService.post(NOTE_KEY, newNote)
}