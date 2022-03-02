import { utilService } from "../../../services/util-service.js";
import { mailService } from "../services/mail-service.js";

export default {
    props: ['mails', 'mail', 'index'],
    template: `
        <section class="mail-view" v-if="!isMailIsDeleted">

                <strong>{{mail.from}}</strong> 
                <strong>{{mail.subject}}</strong>
                <span>
                    {{mail.body}}
                </span>
                <span>
                    {{sentTime}}
                </span>
                <div class="mail-view-actions">
                    <button @click="onDeleteMail">X</button>
                    <!-- Show a read/unread state per email -->
                </div>
            
            
        </section>
    `,
    data() {
        return {
            isMailIsDeleted: false,
            sentTime: mailService.getTimeStringFromDate(this.mail.sentAt)
        }
    },
    created() {
        // getmail by id
    },
    methods: {
        onDeleteMail() {
            mailService.remove(this.mail.id)
                .then(mail => {
                    this.isMailIsDeleted = true
                    this.$emit('mailDeleted', this.isMailIsDeleted);
                })

            // REMOVE from model!

        }
    },
    computed: {

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