import { noteService } from "../services/note-service.js";
import noteList from "../cmps/note-list.cmp.js";
import noteCreate from "../cmps/note-create.cmp.js";


export default {
    template: `
        <section class="note-app app-main">
            <note-create @create-note="createNote"/>
            <note-list v-if="notes" :notes="notes" @remove="removeNote">
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
        noteService.query()
            .then(notes => {
                this.notes = notes
            })
    },
    methods: {
        createNote(note) {
            console.log('note', note);

            this.currType = note.type
            noteService.addNote({ ...note })
                .then(note => {
                    this.notes.push(note)
                    console.log('3456', this.notes);
                })


            // this.note= null
        }


    },
    removeNote(id) {
        console.log(id);
        noteService.remove(id)
            .then(() => {
                const idx = this.notes.findIndex((note) => note.id === id);
                this.notes.splice(idx, 1);
                console.log(this.note);
                eventBus.emit('show-msg', { txt: 'Deleted succesfully', type: 'success' });
            })
            .catch(err => {
                console.error(err);
                eventBus.emit('show-msg', { txt: 'Error - please try again later', type: 'error' });
            });
    },
    setFilter(filterBy) {
        this.filterBy = filterBy;
    },

    computed: {
        notesForDisplay() {
            return this.notes
        },
    },
}