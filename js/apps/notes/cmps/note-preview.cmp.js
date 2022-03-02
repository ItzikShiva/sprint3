import noteTxt from "./note-txt.cmp.js";

export default {
    props: ['note'],
    template: `
        <section class="note-preview">
            <note-txt :note="note" v-if="isTextType"></note-txt>
            <!-- <img v-if=imgType">  -->
            <div>{{note.info.txt}}</div>
            <img :src="bookImgUrl" alt="">
            <li>{{note.todos.txt}}</li>
        </section>
    `,
    components: {
        noteTxt
        
    },
    data() {
        return {

        }
    },
    created() {
        
    },
    methods: {},
    computed: {
        bookImgUrl() {
            return this.note.info.url
        
        
    }
}
}