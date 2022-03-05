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
                        <strong class="mail-preview-inside-from">{{mail.from}}</strong> 
                         <strong class="mail-preview-inside-subject">{{shortSubject}}</strong>
                         <span  class="mail-preview-inside-body">
                             {{shortBody}}
                         </span>
                         <div class="mail-preview-inside-status">
                             <img  v-if="mail.isRead" src="js/apps/mail/imgs/read.png" alt="read mail">
                             <img v-else src="js/apps/mail/imgs/unread.png" alt="unread mail">
                             <span>
                                 {{sentTime}}
                             </span>
                             <button v-if="isMailRemoved" @click="restoreMail">RestoreMail!</button>
                         </div>
                    </div>
                <!-- ++++++++++++ MAIL-VIEW ++++++++++++ -->
                <div class="mail-view" v-if="mail.isView">
                   <div class="mail-view-details">
                       <strong>{{mail.from}} {{mail.to}}</strong> 
                       <strong>{{mail.subject}}</strong>
                   </div>
                    
                    <span class="mail-view-text">
                        {{mail.body}}
                    </span>
                    <div class="mail-view-actions">
                    <!-- <button v-if="mail.removedAt" @click="restoreMail">RestoreMail!</button> -->
                        <span>
                            {{sentTime}}
                        </span>
                        <!-- ========READ \ UNREAD TOGGLE====== -->
                        <img v-if="mail.isRead"  @click="mail.isRead=!mail.isRead,onMailChange();"   src="js/apps/mail/imgs/read.png" alt="make unread mail">
                        <img v-else @click="mail.isRead=!mail.isRead,onMailChange()" src="js/apps/mail/imgs/unread.png" alt="make read mail">
                        <!-- ========STAR \ UNSTAR TOGGLE====== -->
                        <img v-if="mail.isStar"  @click.stop="mail.isStar=!mail.isStar,onMailChange();"   src="js/apps/mail/imgs/star.png" alt="unmark mail">
                        <img v-else @click.stop="mail.isStar=!mail.isStar,onMailChange()" src="js/apps/mail/imgs/unstar.png" alt="make read mail">
                        <img class="delete-btn" @click.stop="onDeleteMail" src="js/apps/mail/imgs/delete.png" alt="make read mail">
                        <!-- <button class="delete-btn" @click="onDeleteMail"><img src="js/apps/mail/imgs/delete.png" alt=""></button> -->
                    </div>
                </div>
        </section>
    `,
    data() {
        return {
            isMailIsDeleted: false,
            isMailRemoved: null,
            // isMailReview: this.mailDeletedId ? false : true,
            isMailView: false,
            sentTime: mailService.getTimeStringFromDate(this.mail.sentAt)
        }
    },
    components: {
        // mailView
    },
    created() {
        this.isMailRemoved = this.mail.removeAt
        this.mail.isView = false
    },
    methods: {
        restoreMail() {
            this.mail.removeAt = null
            mailService.updateMail(this.mail)
        },
        onDeleteMail() {
            console.log('deleted id:', this.mail.id);
            // this.$emit('mailDeleted', this.mail.id, this.mail.removeAt);

            this.isMailIsDeleted = true

            if (!this.mail.removeAt) {
                mailService.getMailById(this.mail.id)
                    .then(mail => {
                        mail.removeAt = new Date()
                        mailService.updateMail(mail)
                        this.$emit('mailDeleted', this.mail.id, this.mail.removeAt);
                    })
                return
            }

            mailService.remove(mailId)
                .then(mail => {
                    mailService.updateMail(mail)
                    this.$emit('mailDeleted', this.mail.id, this.mail.removeAt);
                })
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