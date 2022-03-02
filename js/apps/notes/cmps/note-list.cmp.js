import notePreview from "./note-preview.cmp.js";

export default {
    props: ['notes'],
    template: `

    <section class="note-list">

  <note-preview :key="note.id" v-for="note in notes" :note="note" class="card"/>

        </section>
    
    ` ,
    components: {
        notePreview
    },
    watch: {
        notes: {
            handler() {
                console.log('notes in watcher:', this.notes);
            }
        }
    },
    mounted() {
        console.log('notes in mounted:', this.notes);
    }
}
