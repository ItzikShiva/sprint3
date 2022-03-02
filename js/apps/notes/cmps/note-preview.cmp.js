import noteTxt from "./note-txt.cmp.js";
import noteImg from "./note-img.cmp.js";

export default {
    props: ['note'],
    template: `
        <section class="note-preview">
            <note-txt :note="note" v-if="isTextType"></note-txt>
            <note-img :note="note" v-if="isImgType"></note-img>



            <!-- <img v-if=imgType">  -->
            <!-- <div>{{note.info.txt}}</div>
            <img :src="bookImgUrl" alt="">
            <li>{{note.todos.txt}}</li> -->
        </section>
    `,
    components: {
        noteTxt,
        noteImg

    },
    data() {
        return {
            currType: this.note.type,
            isTextType: false,
            isImgType: false,
            // isTodoType
        }
    },
    created() {
        if (this.currType === 'note-txt') this.isTextType = true;
        else if (this.currType === 'note-img') this.isImgType = true;
    },
    methods: {},
    computed: {
        // isTextType() {
        //     return (this.currType === 'note-txt')
        // },

        bookImgUrl() {
            // return this.note.info.url


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