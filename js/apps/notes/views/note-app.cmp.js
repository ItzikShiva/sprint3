import { noteService } from "../services/note-service.js";
import noteList from "../cmps/note-list.cmp.js";
import noteCreate from "../cmps/note-create.cmp.js";


export default {
    template: `
        <section class="note-app app-main">
            <note-create @create-note="createNote"/>
            <note-list  :notes="notesForDisplay" @doRemove="removeNoteApp"/>
        </section>
    `,
    components: {
        noteList,
        noteCreate,

    },
    data() {
        return {
            notes: null,
            currType: 'note-txt'
        };
    },
    created() {
this.getUpdateAllNotes()

        

    },
    methods: {
        getUpdateAllNotes(){
            noteService.query()
            .then(notes => {
                this.notes = notes
            })
        },
        createNote(note) {
            console.log('note', note);

            this.currType = note.type
            noteService.addNote({ ...note })
                .then(note => {
                    this.notes.push(note)
                    console.log('3456', this.notes);
                })
        },
    
    
        removeNoteApp(id) {
            noteService.removeNote(id)
            .then(note => {
                this.getUpdateAllNotes()
            }
            )
            // console.log('tryinggg to remove', id);
    },
    },
    computed: {
        notesForDisplay() {
            var notesForDisplay = null
            notesForDisplay = this.notes
            return notesForDisplay
        },
    },
}