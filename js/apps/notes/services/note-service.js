import { storageService } from "../../../services/async-storage-service.js";
import { utilService } from "../../../services/util-service.js";
const NOTE_KEY = 'notes';

createNotes()

export const noteService = {
    query,
    addNote
}

function query() {
    return storageService.query(NOTE_KEY)
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
                    backgroundColor: utilService.getRandomColor()
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
                    backgroundColor: utilService.getRandomColor()
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
                    backgroundColor: utilService.getRandomColor()
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
                    backgroundColor: utilService.getRandomColor()
                }
            },
            


        ];

        utilService.saveToStorage(NOTE_KEY, notes);
        console.log(notes);
        return notes;
    }
}

function addNote(notes,newNote){
    console.log('checkk',notes,newNote);
    return storageService.post(notes, newNote)
}