import notePreview from "./note-preview.cmp.js";

export default {
    props: ['notes'],
    template: `

    <section class="note-list" v-if="notes">
        <ul>
            <div v-for="note in notes" :key="note.id" class="note" >
                <note-preview :note="note"></note-preview>
            </div>
        </ul>
    </section>
    
    ` ,
    components: {
        notePreview
    },

    methods: {
    }
}
