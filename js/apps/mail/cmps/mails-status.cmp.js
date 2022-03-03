import { mailService } from "../services/mail-service.js";

export default {
    props: ['mail'],
    template: `
        <section class="mail-preview"  v-if="!isMailDeleted" @click="mail.isView = !mail.isView">
                   <!-- ++++++++++++ MAIL-PREVIEW ++++++++++++ -->
                    <div class="mail-preview-inside" @click="mail.isRead=true">
                        <strong>{{mail.from}}</strong> 
                         <strong>{{shortSubject}}</strong>
                         <span>
                             {{shortBody}}
                         </span>
                         <img v-if="mail.isRead" src="js/apps/mail/imgs/read.png" alt="read mail" >
                         <img v-if="!mail.isRead" src="js/apps/mail/imgs/unread.png" alt="unread mail" >
                         <span>
                             {{sentTime}}
                         </span>
                    </div>
                <!-- ++++++++++++ MAIL-VIEW ++++++++++++ -->
                <div class="mail-view" v-if="mail.isView">
                    <strong>{{mail.from}}</strong> 
                    <strong>{{mail.subject}}</strong>
                    <span>
                        {{mail.body}}
                    </span>
                    <span>
                        {{sentTime}}
                    </span>
                    <div class="mail-view-actions">
                        <img v-if="mail.isRead"  @click="mail.isRead=!mail.isRead" src="js/apps/mail/imgs/read.png" alt="make unread mail" >
                        <img v-if="!mail.isRead" @click="mail.isRead=!mail.isRead" src="js/apps/mail/imgs/unread.png" alt="make read mail">
                        <button v-if @click="onDeleteMail">X</button>
                        
                    </div>
                </div>
        </section>
    `,
    data() {
        return {
            isMailIsDeleted: false,
            // isMailReview: this.mailDeletedId ? false : true,
            isMailView: false,
            sentTime: mailService.getTimeStringFromDate(this.mail.sentAt)
        }
    },
    components: {
        // mailView
    },
    created() {

    },
    methods: {
        onDeleteMail() {
            mailService.remove(this.mail.id)
                .then(mail => {
                    this.isMailIsDeleted = true
                        // console.log('this.index', this.index);
                    console.log(this.mail.id);
                    this.$emit('mailDeleted', this.mails);
                })
            this.isMailIsDeleted = true
        }
    },
    computed: {
        isMailDeleted() {
            return this.isMailIsDeleted
                // return this.mail.id === this.mailDeletedId ? true : false
        },
        shortSubject() {
            return 'sss'
                // return utilService.shortingSentences(this.mail.subject, 2)
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