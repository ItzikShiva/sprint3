import notePreview from "./note-preview.cmp.js";

export default {
    props: ['notes'],
    template: `

          <section v-if="notes" class="note-list">
            <note-preview  :key="idx" v-for="(note,idx) in notes" :note="note"></note-preview>
          </section>
    
    ` ,
 
 
    components: {
        notePreview
    },
    // watch: {
    //     notes: {
    //         handler() {
    //             console.log('notes in watcher:', this.notes);
    //         }
    //     }
    // },
    // mounted() {
    //     console.log('notes in mounted:', this.notes);
    // },
    methods: {

    }
}
