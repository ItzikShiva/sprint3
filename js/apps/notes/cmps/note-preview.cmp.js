import noteTxt from "./note-txt.cmp.js";
import noteImg from "./note-img.cmp.js";
import noteTodos from "./note-todos.cmp.js";
import noteVideo from "./note-video.cmp.js";
import { noteService } from "../services/note-service.js";

export default {
    props: ['note'],
    template: `
        <section @mouseover="hover = true" @mouseleave="hover = false" class="card" v-bind:style="{backgroundColor: note.style.backgroundColor}">
            <!-- <Transition> -->
            
                <div class="preview-renderd">
                    <component :is="note.type" :note="note"/>
                </div>
                
                <!-- <img class="check-circle" src="/img/check.png" alt="remove"> -->

                    <div class="pin">
                        <span @click="pinNote"><img class="img-input" src="/img/thumbtack.png" alt="pin"></span>
                    </div>
            
                <div class="tools" v-if="hover">

                    <div class="material-icons-outlined hover">
                        <label for="color-input" v-show="isShown" @click="!isShown"><img class="img-input" src="/img/pallete.png" alt="remove"></label>
                        <input type="color" @change="changeBgc" v-model="backcolorFirst" id="color-input" v-show="!isShown" @click="isShown">
                    </div>

                    <div class="material-icons-outlined hover">
                        <span @click="remove"><img class="img-input" src="/img/bin.png" alt="remove"></span>
                    </div>

                    <div class="material-icons-outlined hover">
                        <span><img class="img-input" src="/img/pencil.png" alt=""></span>
                    </div>

                    <div class="material-icons-outlined hover">
                        <span @click="duplicateNote"><img class="img-input" src="/img/duplicate.png" alt=""></span>
                    </div>
                </div>
        <!-- </Transition> -->

        
        </section>
    `,
    components: {
        'note-txt': noteTxt,
        'note-img': noteImg,
        'note-todos': noteTodos,
        'note-video': noteVideo

    },
    data() {
        return {
            currType: null,
            backcolorFirst: null,
            isShown: true,
            hover: false,

        }
    },
    created() {
        this.currType = this.note.type
    },
    methods: {
          
        changeBgc() {
            console.log(this.backcolorFirst);
            this.note.style.backgroundColor = this.backcolorFirst
            // this.$emit('onRemove', this.note.id)
            noteService.updateNote(this.note)

        },
        remove() {
            this.$emit('onRemove', this.note.id)
            
        },
        
        pinNote() {
            console.log('trying to pin', id);
            this.$emit('onPin', this.note.id)
        },

        duplicateNote() {
            console.log('prwview-check');
            this.$emit('onDuplicate', this.note.id)

        }
    },
    computed: {
        isTypeImg() {
            return this.note.type === 'note-img'
        },
        noteImgUrl() {
            return this.note.info.url
        },
        titleToRender() {
            if (this.note.info.txt) return this.note.info.txt
            if (this.note.info.title) return this.note.info.title
        },
        noteTodos() {
            return this.note.info.todos
        },
        noteVideo() {
            console.log(this.note.info.video);
            return this.note.info.video
        }


    },

}


// id: "n101",
//     title: "",
//     type: "note-txt",
//     isPinned: true,
//     info: {
//         txt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est eius accusamus rem, asperiores omnis error at possimus cum optio aliquid."
//     }
// }, {
//     id: "n102",
//     type: "note-img",
//     info: {
//         url: "http://some-img/me",
//         title: "Bobi and Me"
//     },
//     style: {
//         backgroundColor: "#00d"
//     }
// }, {
//     id: "n103",
//     type: "note-todos",
//     info: {
//         label: "Get my stuff together",
//         todos: [
//             { txt: "Driving liscence", doneAt: null },
//             { txt: "Coding power", doneAt: 187111111 },
//             { txt: "Driving liscence", doneAt: null },
//             { txt: "Coding power", doneAt: 187111111 },
//             { txt: "Driving liscence", doneAt: null },
//             { txt: "Coding power", doneAt: 187111111 }
//         ]
//     }
// }