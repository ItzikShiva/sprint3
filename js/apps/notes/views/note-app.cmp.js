import { noteService } from "../services/note-service.js";
import { eventBus } from "../services/eventBus-service.js";
import noteList from "../cmps/note-list.cmp.js";
import noteCreate from "../cmps/note-create.cmp.js";
import notesFilter from "../cmps/notes-filter.cmp.js";
import userMsg from "../cmps/user-msg.cmp.js";
import { utilService } from "../../../services/util-service.js";
import { storageService } from "../../../services/async-storage-service.js";

export default {
    template: `
        <section class="note-app app-main">
            <user-msg />
            <notes-filter @filtered="setFilter" @filteredbytype="onSetFilterByType"></notes-filter>
            <note-create @create-note="createNote" @duplicateNote="onDuplicateNote"/>
            <note-list  :notes="notesForDisplay" :pinnedNotes="pinnedNotes" @doRemove="removeNoteApp" @pinNote="onPinToTop" @duplicateNoted="onDuplicateNote"/>
        </section>
    `,
    components: {
        noteList,
        noteCreate,
        notesFilter,
        userMsg
    },
    data() {
        return {
            notes: null,
            currType: 'note-txt',
            filterByText: null,
            filterbyType: null,
            pinnedNotes: [],
            duplicateNote: []
        };
    },
    created() {
        this.getUpdateAllNotes()
    },
    methods: {
        onDuplicateNote(id) {
            noteService.duplicateNotes(id)
                .then(note => {
                    noteService.saveNoteToStorage(note)
                        .then(note =>
                            this.notes.push(note)
                        )
                })
        },
        getUpdateAllNotes() {
            noteService.query()
                .then(notes => {
                    this.notes = notes
                })
            noteService.pinnedNotesQuery()
                .then(pinnedNotes => {
                    this.pinnedNotes = pinnedNotes
                })
        },
        createNote(note) {
            console.log('note:', note);
            this.currType = note.type
            noteService.addNote({...note })
                .then(note => {
                    this.notes.push(note)
                    console.log('created');
                    eventBus.emit('show-msg', { txt: 'Saved succesfully', type: 'el-success' })
                })
        },
        onPinToTop(id) {
            const selectedNote = this.notes.find((note) => note.id === id) || this.pinnedNotes.find((note) => note.id === id)
            if (selectedNote.isPinned) {
                selectedNote.isPinned = false
                this.onRemoveNote(id, this.pinnedNotes)
                this.onAddToNotes(selectedNote)
                return
            } else {
                selectedNote.isPinned = true
                this.onRemoveNote(id, this.notes)
                this.onAddNoteToPinnedNotes(selectedNote)
                return
            }
        },
        onRemoveNote(id, notesArray) {
            const selectedNoteIdx = notesArray.findIndex((note) => note.id === id)
            notesArray.splice(selectedNoteIdx, 1)
            this.onUpdateLocalStorage()
        },
        onAddNoteToPinnedNotes(selectedNote) {
            this.pinnedNotes.unshift(selectedNote)
            this.onUpdateLocalStorage()
        },
        onUpdateLocalStorage() {
            utilService.saveToStorage('notes', this.notes);
            utilService.saveToStorage('pinnedNotes', this.pinnedNotes);
        },
        onAddToNotes(selectedNote) {
            this.notes.unshift(selectedNote)
        },
        removeNoteApp(id) {
            noteService.removeNote(id)
                .then(note => {
                    this.getUpdateAllNotes()
                })
        },
        setFilter(filterBy) {
            console.log('filterBy:', filterBy);
            this.filterByText = filterBy.txt
        },
        onSetFilterByType(filterBy) {
            console.log('filterBy:', filterBy);
            this.filterbyType = filterBy
        },



    },
    computed: {
        notesForDisplay() {
            var notesForDisplay = null

            notesForDisplay = this.notes

            if (!this.filterByText && !this.filterbyType) return notesForDisplay;

            if (this.filterByText) {

                console.log(this.filterByText);

                const regex = new RegExp(this.filterByText, 'i');

                return this.notes.filter(note => regex.test(note.info.txt) || regex.test(note.info.title) || regex.test(note.info.label))
            }
            // regex.test(
            //     note.info.todos ? note.info.todos.map((note) => note.txt)) : note.info.title
            //     );

            if (this.filterbyType) {
                return this.notes.filter(note => note.type === this.filterbyType)
            }
        },
    },
}