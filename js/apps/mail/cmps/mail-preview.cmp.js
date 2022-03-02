import { utilService } from "../../../services/util-service.js";
import { mailService } from "../services/mail-service.js";
import mailView from "./mail-view.cmp.js";

export default {
    props: ['mail'],
    template: `
        <section class="mail-preview" v-if="mail" @click="isMailView = !isMailView">
                <strong>{{mail.from}}</strong> 
                <strong>{{shortSubject}}</strong>
                <span>
                    {{shortBody}}
                </span>
                <span>
                    {{sentTime}}
                </span>
   
        </section>
    `,
    data() {
        return {
            isMailView: false,
            sentTime: mailService.getTimeStringFromDate(this.mail.sentAt)
        }
    },
    components: {
        mailView
    },
    created() {

    },
    methods: {

    },
    computed: {
        shortSubject() {
            return utilService.shortingSentences(this.mail.subject, 2)
        },
        shortBody() {
            return utilService.shortingSentences(this.mail.body, 4)
        },

    }
}

// {
//     id: 'e104',
//     from: 'dor',
//     subject: 'dsadsu! dsadsu! dsadsu!dsadsu!',
//     body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nisi consequatur facilis ipsam.',
//     isRead: false,
//     sentAt: 1551133930594,
//     to: 'momo@momo.com'
// },