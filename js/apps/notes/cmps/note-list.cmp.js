import notePreview from "./note-preview.cmp.js";

export default {
    props: ['notes'],
    template: `

    <section class="note-list">
    <input type="text"> <button>note text</button><button>note img</button><button>not todos</button>
        <ul>
            <li v-for="note in notes" :key="note.id" >
                <note-preview :note="note"></note-preview>
            </li>
        </ul>
    </section>
    
    ` ,
    components: {
        notePreview
    },

    methods: {
    }
}