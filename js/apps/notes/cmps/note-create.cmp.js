import { utilService } from "../../../services/util-service.js";

export default {
    template: `
        <section class="create-section">

            <div class="input-div">

                <input class="input-notes" type="text" :placeholder="note.placeholderContent" v-model="note.info.txt"/>

                <div class="note-types">

                    <div class="material-icons-outlined hover">
                        <span @click="createNote"><img class="img-input" src="/img/add.png" alt=""></span>
                    </div>

                    <div class="material-icons-outlined hover">
                        <span @click="setNopteType('note-txt')"><img class="img-input" src="/img/font-symbol-of-letter-a.png" alt=""></span>
                    </div>

                    <div class="material-icons-outlined hover">
                        <span @click="setNopteType('note-img')"><img class="img-input" src="/img/image.png" alt=""></span>
                    </div>

                    <div class="material-icons-outlined hover">
                        <span @click="setNopteType('note-video')"><img class="img-input" src="/img/youtube.png" alt=""></span>
                    </div>

                    <div class="material-icons-outlined hover">
                        <span @click="setNopteType('note-todos')"><img class="img-input" src="/img/list.png" alt=""></span>
                    </div>
                </div>
            </div>
        </section>
    `,
    components: {

    },
    data() {
        return {
            note: {
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: '',
                },
                style: {
                    backgroundColor: utilService.getRandomColor()
                },
                placeholderContent: 'write note txt',
            },

        }
    },

    methods: {
        setNopteType(type) {
            switch (type) {
                case 'note-txt': this.placeholderContent = 'write a text'; break
                case 'note-img': this.placeholderContent = 'insert an image link'; break
                case 'note-video': this.placeholderContent = 'insert a video link'; break
                case 'note-todos': this.placeholderContent = 'write todos seperate by comma'; break
            }
        },
        createNote() {
            // if (!this.note.info.txt) return
            const note = { ...this.note }
            console.log('note:',note);
            this.$emit('create-note', note)

            // this.note.info.txt = ''
        }

    },
    computed: {


    },
};