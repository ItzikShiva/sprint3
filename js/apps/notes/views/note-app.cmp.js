
import { noteService } from "../services/note-service.js";
import noteList from "../cmps/note-list.cmp.js";

/* <filter></filter>
<note-list>
    <note-preview>
        <note-txt\img\video>
    </note-preview>
</note-list> */

export default {
    template: `
        <section class="">
            <note-list :notes="notesForDisplay"></note-list>
            
        <!-- <filter></filter>
        <add button>
        <note-list>
        </note-list>  -->
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