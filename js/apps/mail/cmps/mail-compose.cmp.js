// import mailPreview from "./mail-preview.cmp.js"
// import mailsStatus from "./mail-status.cmp.js"
// import mailFilter from "./mail-filter.cmp.js"
// import mailSort from "./mail-sort.cmp.js"
import { mailService } from "../services/mail-service.js";

export default {
    // mails - are filterd. allMails - not filtered
    template: `
        <section class="mail-compose">
            <h2>New Message</h2>
        <form @submit.prevent="send">
                From:(hard code)<input type="text" v-model="currMail.from" placeholder="enter full name">
                To:<input type="text" v-model="currMail.to" placeholder="enter full name">
                Subject:<input type="text" v-model="currMail.subject" placeholder="enter full name">
                Body:<textarea v-model="currMail.body" rows="5" cols="33" > 
                </textarea>
                
                <button>Send</button>
            </form>
        </section>
    `,
    data() {
        return {
            currMail: {
                from: null,
                subject: null,
                body: null,
                to: null,
            }
        }
    },
    components: {
        // mailPreview,
        // mailsStatus,
        // mailFilter,
        // mailSort
    },
    methods: {
        send() {
            // TODO!!!!!!!!!!!   check inputs!!!!!!!
            if (!this.currMail.from || !this.currMail.subject || !this.currMail.body || !this.currMail.to) {
                console.log('nothing');
                return
            }

            var newComposeMail = {
                from: this.currMail.from,
                subject: this.currMail.subject,
                body: this.currMail.body,
                to: this.currMail.to,

            }
            this.$emit('mailPosted', newComposeMail);
        },
    },
    computed: {

    }
}