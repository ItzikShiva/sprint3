import mailPreview from "./mail-preview.cmp.js"
// import mailView from "./mail-view.cmp.js";


export default {
    props: ['mails'],
    template: `
        <section class="mails-list">
            <!-- <mails-status></mails-status> -->
            <ul>
                <li v-for="(mail,index) in mails" :key="mail.id" >
                   <mail-preview :mail="mail"  />
                </li>
            </ul>
        </section>
    `,
    data() {
        return {

            isMailView: false,
            // mailsToViewIds: [],
            currMailToView: null,
        }
    },
    components: {
        mailPreview,
        // mailView
    },
    methods: {

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