import { noteService } from "../services/note-service.js";
import noteList from "../cmps/note-list.cmp.js";

export default {
    template: `
        <section class="note-app app-main">
            <note-list :notes="notesForDisplay"></note-list>
        </section>
    `,
    components: {
        noteList

    },
    data() {
        return {
            notes: null

        };
    },
    created() {
        this.notes = noteService.createNotes()
        console.log(this.notes);
    },
    methods: {


    },
    computed: {
        notesForDisplay() {
            return this.notes
        }

    },
};