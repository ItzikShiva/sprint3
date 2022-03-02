import noteTxt from "./note-txt.cmp.js";
import noteImg from "./note-img.cmp.js";
import noteTodos from "./note-todos.cmp.js";

export default {
    props: ['note'],
    template: `
        <section :style="{'background-color': noteBackground}" class="note-preview" v-if="note">
         <p>{{titleToRender}}</p>
        <img :style="{width:'50px'}" v-if="isTypeImg" :src="noteImgUrl" alt="">
        <div class="todo-list">
            <p>{{note.info.label}}</p>
            <ul>
                <li v-for="note in noteTodos" :key="note.id">{{note.txt}}</li>
            </ul>
        </div>
        </section>
    `,
    components: {
        noteTxt,
        noteImg,
        noteTodos

    },
    data() {
        return {
            currType: this.note.type,
            isTextType: false,
            isImgType: false,
            isTodosType: false,
            // isTodoType
        }
    },
    created() {
        if (this.currType === 'note-txt') this.isTextType = true;
        else if (this.currType === 'note-img') this.isImgType = true;
        else if (this.currType === 'note-todos') this.isTodosType = true;
    },
    methods: {},
    computed: {
        isTypeImg() {
            return this.note.type === 'note-img'
        },
        noteImgUrl() {
            return this.note.info.url
        },
        noteBackground() {
            return this.note.style.backgroundColor
        },
        titleToRender() {
            if (this.note.info.txt) return this.note.info.txt
            if (this.note.info.title) return this.note.info.title
        },
        noteTodos() {
            return this.note.info.todos
        }

    }
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