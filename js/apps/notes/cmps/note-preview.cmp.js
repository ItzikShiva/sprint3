import noteTxt from "./note-txt.cmp.js";
import noteImg from "./note-img.cmp.js";
import noteTodos from "./note-todos.cmp.js";
import noteVideo from "./note-video.cmp.js";
import { noteService } from "../services/note-service.js";
import { eventBus } from '../services/eventBus-service.js'
import { sendMail } from "../../../services/eventBus-service.js";

export default {
    props: ['note'],
    template: `
        <section @mouseover="hover = true" @mouseleave="hover = false" class="card" v-bind:style="{backgroundColor: note.style.backgroundColor}">
            <!-- <Transition> -->
                
                <!-- <img class="check-circle" src="/img/check.png" alt="remove"> -->
                
                <div class="pin">
                <span v-if="!note.isPinned" @click="pinNote">touch to pin</span>
                    <span v-if="note.isPinned" @click="pinNote"><img class="img-input" src="/img/thumbtack.png" alt="pin"></span>
                </div>
                <div class="preview-renderd">
                    <component :is="note.type" :note="note"/>
                </div>
            
                <div class="tools" v-if="hover">

                    <div class="material-icons-outlined hover">
                        <label for="color-input" v-show="isShown" @click="!isShown"><img class="img-input" src="/img/pallete.png" alt="remove"></label>
                        <input type="color" @change="changeBgc" v-model="backcolorFirst" id="color-input" v-show="!isShown" @click="isShown">
                    </div>

                    <div class="material-icons-outlined hover">
                        <span @click="remove"><img class="img-input" src="/img/bin.png" alt="remove"></span>
                    </div>
<!-- 
                    <div class="material-icons-outlined hover">
                        <span @click=""><img class="img-input" src="/img/pencil.png" alt=""></span>
                    </div> -->

                    <div class="material-icons-outlined hover">
                        <span @click="duplicateNote"><img class="img-input" src="/img/duplicate.png" alt=""></span>
                    </div>
                    <!-- ITZIK ADD: -->
                    <router-link :to="'/appsus/mail/'+note.id">
                        <div class="material-icons-outlined hover">
                            <span @click="sendingMail"><img class="img-input" src="/img/send.png" alt=""></span>
                        </div>
                    </router-link>  
                    <!-- / ITZIK ADD: -->
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
        if (!this.note) return
        this.currType = this.note.type

    },
    methods: {
        sendingMail() {
            // eventBus.emit('show-msg', { txt: 'Saved succesfully', type: 'success' })
            // eventBus.on('onSendNoteToMail', this.note);

            // this.$emit('onSendNoteToMail', this.note)
            // sendMail(this.note)
            // this.$router.push('/appsus/mail')

            // console.log(this.note);
        },

        changeBgc() {
            if (!this.note) return
            console.log(this.backcolorFirst);
            this.note.style.backgroundColor = this.backcolorFirst
                // this.$emit('onRemove', this.note.id)
            noteService.updateNote(this.note)

        },
        remove() {
            if (!this.note) return
            this.$emit('onRemove', this.note.id)
        },

        pinNote(id) {
            if (!this.note) return
            console.log('trying to pin', id);
            this.$emit('onPin', this.note.id)
        },

        duplicateNote() {
            if (!this.note) return
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
            console.log('test title');
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