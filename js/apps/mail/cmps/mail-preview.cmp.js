import { utilService } from "../../../services/util-service.js";
import { mailService } from "../services/mail-service.js";
// import mailView from "./mail-view.cmp.js";
import { showErrorMsg, showSuccessMsg, eventBus } from "../../../services/eventBus-service.js";

export default {
    props: ['mail'],
    template: `
        <section class="mail-preview"  v-if="!isMailDeleted" @click.prevent="mail.isView = !mail.isView">
                   <!-- ++++++++++++ MAIL-PREVIEW ++++++++++++ -->
                    <div class="mail-preview-inside" @click="mail.isRead=true,onMailChange()">
                        <strong>{{mail.from}}</strong> 
                         <strong>{{shortSubject}}</strong>
                         <span>
                             {{shortBody}}
                         </span>
                         <img  v-if="mail.isRead" src="js/apps/mail/imgs/read.png" alt="read mail">
                         <img v-else src="js/apps/mail/imgs/unread.png" alt="unread mail">
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
                        <!-- ========READ \ UNREAD TOGGLE====== -->
                        <img v-if="mail.isRead"  @click="mail.isRead=!mail.isRead,onMailChange();"   src="js/apps/mail/imgs/read.png" alt="make unread mail">
                        <img v-else @click="mail.isRead=!mail.isRead,onMailChange()" src="js/apps/mail/imgs/unread.png" alt="make read mail">
                        <!-- ========STAR \ UNSTAR TOGGLE====== -->
                        <img v-if="mail.isStar"  @click.stop="mail.isStar=!mail.isStar,onMailChange();"   src="js/apps/mail/imgs/star.png" alt="unmark mail">
                        <img v-else @click.stop="mail.isStar=!mail.isStar,onMailChange()" src="js/apps/mail/imgs/unstar.png" alt="make read mail">
                        <button @click="onDeleteMail">X</button>
                        
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
        this.mail.isView = false
    },
    methods: {
        onDeleteMail() {
            console.log('deleted id:', this.mail.id);
            this.$emit('mailDeleted', this.mail.id);

            this.isMailIsDeleted = true
        },
        onMailChange() {
            mailService.updateMail(this.mail)
        }
    },
    computed: {
        isMailDeleted() {
            return this.isMailIsDeleted
                // return this.mail.id === this.mailDeletedId ? true : false
        },
        shortSubject() {
            return utilService.shortingSentences(this.mail.subject, 2)
        },
        shortBody() {
            return utilService.shortingSentences(this.mail.body, 4)
        },

    },
    unmounted() {
        this.mail.isView = false
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