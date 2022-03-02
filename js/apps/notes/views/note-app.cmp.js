import { noteService } from "../services/note-service.js";
import noteList from "../cmps/note-list.cmp.js";
import noteCreate from "../cmps/note-create.cmp.js";
import noteTxt from "../cmps/note-txt.cmp.js";
import noteImg from "../cmps/note-img.cmp.js";
import noteTodosCmp from "../cmps/note-todos.cmp.js";

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
        'note-txt': noteTxt,
        'note-img': noteImg,
        'note-todos': noteTodosCmp


    },
    data() {
        return {
            notes: null,
            note: null,
            currType: 'note-txt'
        };
    },
    created() {
        this.notes = noteService.createNotes()
        console.log(this.notes);
    },
    methods: {
        createNote(note) {
            console.log(note);
            this.note = note
            this.currType = note.type
            // switch (note.type) {
            //     case 'note-txt': this.placeholderContent = 'wwrite a text'; break
            //     case 'note-img': this.placeholderContent = 'insert an image link'; break
            //     case 'note-video': this.placeholderContent = 'insert a video link'; break
            //     case 'note-todos': this.placeholderContent = 'write todos seperate by comma'; break
            // }
        }


    },
    computed: {
        notesForDisplay() {
            return this.notes
        },


    },
};