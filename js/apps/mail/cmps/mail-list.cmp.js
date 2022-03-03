import mailPreview from "./mail-preview.cmp.js"
import mailsStatus from "./mail-status.cmp.js"
import mailFilter from "./mail-filter.cmp.js"
// import mailView from "./mail-view.cmp.js";


export default {
    // mails - are filterd. allMails - not filtered
    props: ['mailstoDisplay', 'allMails'],
    template: `
        <section class="mail-list">
        <!-- <div class="mail-menu">
        ssdasdas
            </div> -->
            
            <ul>
                <li v-for="(mail,index) in mailstoDisplay" :key="mail.id" >
                   <mail-preview :mail="mail" @mailDeleted="mailWasDelete"/>
                </li>
            </ul>
        </section>
    `,
    data() {
        return {
            // isMailDeleted: false,
            isMailView: false,
            // mailsToViewIds: [],
            currMailToView: null,
        }
    },
    components: {
        mailPreview,
        mailsStatus,
        mailFilter

    },
    methods: {
        mailWasDelete(mailDeletedId) {
            console.log('id', mailDeletedId);
            this.$emit('mailDeleted', mailDeletedId);
            //this for the mails-status cmp
            this.isMailDeleted = true
        },
        // isInMailsToViewIds(mailId) {
        //     return this.mailsToViewIds.some(id => id === mailId)
        // },

        // idsToView(mailId) {
        //     this.mailsToViewIds.push(mailId)
        //     console.log(this.mailsToViewIds)
        //         // this.mailToViewId = mailId
        // }
        // remove(id) {
        //     this.$emit('remove', id);
        // },
        // select(car) {
        //     this.$emit('selected', car);
        // }
    },
    computed: {

    }
}