import { mailService } from "../services/mail-service.js";
import mailPreview from "./mail-preview.cmp.js";

export default {
    props: ['allMails'],
    template: `
        <section class="mails-status" >
        {{mailReadsCountComputed}}  mail reads out of {{allMailsCountComputed}}
        
        </section>
    `,
    components: {
        mailPreview
    },
    mounted() {},
    data() {
        return {
            allMailsCount: 0,
            updateCountAllMails: 0,
            mailDeletedCounter: 0
        }
    },
    components: {
        // mailView
    },
    created() {},
    methods: {
        deleted() {
            console.log('check');
        },
    },
    computed: {
        mailReadsCountComputed() {
            if (!this.allMails) return
            var mailsRead = 0
            this.allMails.forEach(mail => {
                mailsRead += mail.isRead ? 1 : 0
            });
            return mailsRead
        },
        allMailsCountComputed() {
            if (!this.allMails) return
            return this.allMails.length

            // console.log(this.allMails.length);
            // this.updateCountAllMails = this.allMails.length
            // if (this.isMailDeleted) {
            //     // this.allMails.length--
            //     this.mailDeletedCounter++
            //         this.updateCountAllMails -= this.mailDeletedCounter
            //         // this.isMailDeleted = false
            // }
            // return this.updateCountAllMails
        },
    },
    unmounted() {

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