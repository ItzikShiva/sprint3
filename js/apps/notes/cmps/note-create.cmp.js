import { utilService } from "../../../services/util-service.js";
import { noteService } from "../services/note-service.js";

export default {
    template: `
        <section class="create-section">

            <div class="input-div">

                <input class="input-notes" type="text" :placeholder="note.placeholderContent" v-model="note.info.txt"/>

                <div class="note-types">

                    <div class="material-icons-outlined hover">
                        <span @click="createNote(note.info.txt)"><img class="img-input" src="/img/add.png" alt=""></span>
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
                case 'note-txt':
                    this.note.placeholderContent = 'write a text';
                    break
                case 'note-img':
                    this.note.placeholderContent = 'insert an image link';
                    break
                case 'note-video':
                    this.note.placeholderContent = 'insert a video link';
                    break
                case 'note-todos':
                    this.note.placeholderContent = 'write todos seperate by comma';
                    break
            }
        },
        createNote(text) {
            // if (!this.note.info.txt) return
            const newNote = noteService.createNote()
                // console.log(note)
            var textToAdd = this.note.info.txt
            var typeToAdd = this.note.placeholderContent

            if (typeToAdd === 'insert an image link') {
                newNote.info.url = textToAdd
                newNote.type = "note-img"
                    // console.log(newNote);
            }
            if (typeToAdd === 'insert a video link') {
                newNote.info.video = textToAdd
                newNote.type = "note-video"
                    // console.log(newNote);
            }
            if (typeToAdd === 'write a text') {
                newNote.info.txt = textToAdd
                newNote.type = "note-txt"
                    // console.log(newNote);
            }
            // console.log(typeToAdd);



            this.$emit('create-note', newNote)

            // this.note.info.txt = ''
        }

    },
    computed: {


    },
};