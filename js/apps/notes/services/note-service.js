import { storageService } from "../../../services/async-storage-service.js";
import { utilService } from "../../../services/util-service.js";
const NOTE_KEY = 'notes';

createNotes()

export const noteService = {
    query,
    addNote,
    save,
    get,
    updateNote
}


function updateNote(note){
return storageService.put(NOTE_KEY,note)
}
function query() {
    return storageService.query(NOTE_KEY)
}

function save(note) {
    if (note.id) return storageService.put(NOTE_KEY, note);
    else return storageService.post(NOTE_KEY, note);
}

function get(id) {
    return storageService.get(NOTE_KEY, note.id);
}



function createNotes() {

    let notes = utilService.loadFromStorage(NOTE_KEY);
    if (!notes || !notes.length) {

        notes = [
            {
                id: "n101",
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "Fullstack Me Baby!",
                },
                style: {
                    backgroundColor,
                }
            },
            {
                id: "n102",
                type: "note-img",
                info: {
                    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1",
                    title: "Bobi and Me"
                },
                style: {
                    backgroundColor,
                }
            },
            {
                id: "n103",
                type: "note-todos",
                info: {

                    label: "Get my stuff together",
                    todos: [
                        { id: 1, txt: "Driving liscence", doneAt: null },
                        { id: 2, txt: "Coding power", doneAt: 187111111 }
                    ]
                },
                style: {
                    backgroundColor,
                }
            },
            {
                id: "n104",
                type: "note-video",
                info: {
                    video: "https://www.youtube.com/watch?v=9BBqNcNqWOE",
                    title: "Faders Live!!!"
                },
                style: {
                    backgroundColor,
                }
            },
            


        ];

        utilService.saveToStorage(NOTE_KEY, notes);
        console.log(notes);
        return notes;
    }
}


function addNote(newNote){
    console.log('newNote',newNote);
    return storageService.post(NOTE_KEY, newNote)
}