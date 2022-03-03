import noteTxt from "./note-txt.cmp.js";
import noteImg from "./note-img.cmp.js";
import noteTodos from "./note-todos.cmp.js";
import noteVideo from "./note-video.cmp.js";
import { noteService } from "../services/note-service.js";

export default {
    props: ['note'],
    template: `
        <section v-if="note" class="card" v-bind:style="{backgroundColor: note.style.backgroundColor}">
        <component :is="note.type" :note="note"/>
        <input type="color" @change="changeBgc" v-model="backcolorFirst">
        <button @click="remove">Remove</button>

        
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
            currBgc: null
        }
    },
    created() {
        console.log('this.note', this.note);
        this.currType = this.note.type
        console.log('this.currType', this.currType);
    },
    methods: {
          
        changeBgc(backcolorFirst) {
            console.log(this.backcolorFirst);
            this.note.style.backgroundColor = this.backcolorFirst
            // this.$emit('onRemove', this.note.id)
            noteService.updateNote(this.note)

        },
        remove(id) {
            // console.log('trying to remove', id);
            this.$emit('onRemove', this.note.id)

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