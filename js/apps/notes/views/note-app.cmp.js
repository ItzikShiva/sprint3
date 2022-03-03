import { noteService } from "../services/note-service.js";
import noteList from "../cmps/note-list.cmp.js";
import noteCreate from "../cmps/note-create.cmp.js";


export default {
    template: `
        <section class="note-app app-main">
            <note-create @create-note="createNote"/>
            <note-list :notes="notesForDisplay"></note-list>
        <component v-if="note" :is="currType" :note="note"/>
        </section>
    `,
    components: {
        noteList,
        noteCreate,
     
    },
    data() {
        return {
            notes: null,
            note: null,
            currType: 'note-txt'
        };
    },
    created() {
        noteService.query()
            .then(notes => {
                this.notes = notes
                console.log('notes:', this.notes);
            })
    },
    methods: {
        createNote(note) {
            console.log(this.notes);
            this.currType = note.type
            noteService.addNote(this.notes,note)
            // this.note = note
            this.notes.push(note)
            console.log(this.notes);

            this.note= null
        }


    },
    computed: {
        notesForDisplay() {
            return this.notes
        },
    },
};