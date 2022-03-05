import mailPreview from "./mail-preview.cmp.js"
import mailsStatus from "./mail-status.cmp.js"
import mailFilter from "./mail-filter.cmp.js"
import mailSort from "./mail-sort.cmp.js"


export default {
    // mails - are filterd. allMails - not filtered
    props: ['mailstoDisplay', 'allMails'],
    template: `
        <section class="mail-list">
        <!-- <div class="mail-menu">
        ssdasdas
            </div> -->
            
            <ul>
                <li>
                    <mail-sort @sorted="onSorted"> </mail-sort>
                </li>
                <li class="mail-list-mails" v-for="(mail,index) in mailstoDisplay" :key="mail.id" >
                   <mail-preview :mail="mail" @mailDeleted="mailWasDelete"/>
                </li>
            </ul>
        </section>
    `,
    data() {
        return {
            isMailView: false,
            currMailToView: null,
        }
    },
    components: {
        mailPreview,
        mailsStatus,
        mailFilter,
        mailSort

    },
    methods: {
        mailWasDelete(mailDeletedId, mailDeletedRemoveAt) {
            console.log('id', mailDeletedId);
            this.$emit('mailDeleted', mailDeletedId, mailDeletedRemoveAt);
            //this for the mails-status cmp
            this.isMailDeleted = true
        },
        onSorted(sortBy) {
            // console.log(sortBy);
            this.$emit('sorted', sortBy);
        },
    },
    computed: {

    }
}