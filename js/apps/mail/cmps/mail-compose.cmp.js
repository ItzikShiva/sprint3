// import mailPreview from "./mail-preview.cmp.js"
// import mailsStatus from "./mail-status.cmp.js"
// import mailFilter from "./mail-filter.cmp.js"
// import mailSort from "./mail-sort.cmp.js"
import { mailService } from "../services/mail-service.js";
import { noteService } from '../../notes/services/note-service.js';

export default {
    // mails - are filterd. allMails - not filtered
    template: `
        <section class="mail-compose">
            <div class="compose-mail-section">

                <h2>New Message</h2>
                <form @submit.prevent="send">
                    <div class="inputs-compose-new-mail">
                        <input type="text" v-model="currMail.from" placeholder="enter full name">
                        To:<input type="text" v-model="currMail.to" placeholder="enter full name">
                        Subject:<input type="text" v-model="currMail.subject" placeholder="enter full name" >
                    </div>
                    <textarea v-model="currMail.body" rows="5" cols="33" ></textarea>
                    <br>
                    {{isValid}}
                    <button>Send</button>
                </form>
            </div>
            </section>
    `,
    data() {
        return {
            currMail: {
                from: null,
                subject: null,
                body: null,
                to: null,
            },
            isValid: null,
        }
    },
    created() {
        this.checkIfNoteRecieved()
    },
    components: {},
    methods: {
        checkIfNoteRecieved() {
            var noteId = this.$route.params.noteId
            if (!noteId) return
                // console.log('recieved id!!!!', noteId);
            this.noteIsRecieved(noteId)

        },
        noteIsRecieved(noteId) {
            noteService.get(noteId)
                .then(note => {
                    this.isComposeMail = true;
                    var noteMail = {
                        from: null,
                        subject: null,
                        body: null,
                        to: null,
                    }
                    noteMail.from = note.id
                    noteMail.subject = note.info.txt || note.info.title || note.info.label
                    noteMail.body = note.info.txt || note.info.url || this.getTodosString(note.info.todos)
                    this.currMail = noteMail
                })
        },
        getTodosString(todos) {
            var body = ''
            for (let i = 0; i < todos.length; i++) {
                body += todos[i].id + '. ' + todos[i].txt + '\n';
            }
            return body
        },
        send() {
            // TODO!!!!!!!!!!!   check inputs!!!!!!!
            if (!this.currMail.from || !this.currMail.subject || !this.currMail.body || !this.currMail.to) {
                console.log('nothing');
                this.isValid = 'Please enter valid inputs'
                return
            }

            this.isValid = null
            var newComposeMail = {
                from: this.currMail.from,
                subject: this.currMail.subject,
                body: this.currMail.body,
                to: this.currMail.to,

            }
            this.$emit('mailPosted', newComposeMail);
            this.$router.push('/appsus/mail')
        },
    },
    computed: {

    }
}