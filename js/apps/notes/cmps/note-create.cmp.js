import { utilService } from "../../../services/util-service.js";

export default {
    template: `
        <section class="create-section">
            <div class="input-div">
                <input class="input-notes" type="text" :placeholder="placeholderContent" v-model="note.info.txt"/>
                <div class="note-types">
                    <span @click="createNote"><img class="img-input" src="/img/writing.png" alt=""></span>
                    <span @click="setNopteType('note-txt')"><img class="img-input" src="/img/font-symbol-of-letter-a.png" alt="">
</span>
                    <span @click="setNopteType('note-img')"><img class="img-input" src="/img/image.png" alt=""></span>
                    <span @click="setNopteType('note-video')"><img class="img-input" src="/img/youtube.png" alt=""></span>
                    <span @click="setNopteType('note-todos')"><img class="img-input" src="/img/list.png" alt=""></span>
                </div>
            </div>
            <div>
                <!-- <button @click="createNote">CREATE</button> -->
            </div>
        </section>
    `,
    components: {

    },
    data() {
        return {
            note: {
                id: utilService.makeId(length = 6),
                type: 'note-txt',
                info: {
                    txt: ""
                },
                isPinned: true,
            },
            placeholderContent: 'write note txt'
        }
    },
    created() {
    },
    methods: {
        setNopteType(type) {
            console.log('type:', type);
            switch (type) {
                case 'note-txt': this.placeholderContent = 'wwrite a text'; break
                case 'note-img': this.placeholderContent = 'insert an image link'; break
                case 'note-video': this.placeholderContent = 'insert a video link'; break
                case 'note-todos': this.placeholderContent = 'write todos seperate by comma'; break
            }

        },
        createNote() {
            if (!this.note.info.txt) return
            this.$emit('create-note', { ...this.note })
            this.note.isPinned = false
        }

    },
    computed: {


    },
};