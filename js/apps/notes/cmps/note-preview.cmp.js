import noteTxt from "./note-txt.cmp.js";

export default {
    props: ['note'],
    template: `
        <section class="note-preview">
            <note-txt :note="note" v-if="isTextType"></note-txt>
            <!-- <img v-if=imgType">  -->
            <div>{{note.type}}</div>
            <div>{{note.type}}</div>
        </section>
    `,

    components: {
        noteTxt

    },
    data() {
        return {
            currType: this.note.type,
            isTextType: false,
            // isImgType: false
        }
    },
    created() {
        if (currType === 'text') isTextType = true;

    },
    methods: {},
    computed: {
        currType() {
            return this.note.type
        }
    }
}