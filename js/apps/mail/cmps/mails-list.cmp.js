import mailPreview from "./mail-preview.cmp.js"
import mailView from "./mail-view.cmp.js";


export default {
    props: ['mails'],
    template: `
        <section class="mails-list">
            <ul>
                <li v-for="(mail,index) in mails" :key="mail.id" >
                   <mail-preview :mail="mail" @click="mail.isView = !mail.isView" v-if="isMailPreview"/>
                   <mail-view class="mail-view" v-if="mail.isView" :mails="mails" :mail="mail" :index="index" @mailDeleted="onMailDeleted"/>
                   <!-- <div class="actions">
                       <button @click="remove(car.id)">X</button>
                       <router-link :to="'/car/edit/'+car.id">Edit</router-link>
                   </div> -->
                </li>
            </ul>
        </section>
    `,
    data() {
        return {
            isMailPreview: true,
            isMailView: false,
            mailsToViewIds: [],
            currMailToView: null,
        }
    },
    components: {
        mailPreview,
        mailView
    },
    methods: {
        onMailDeleted(isMailIsDeleted) {
            this.isMailPreview = false
        },
        isInMailsToViewIds(mailId) {
            return this.mailsToViewIds.some(id => id === mailId)
        },

        idsToView(mailId) {
            this.mailsToViewIds.push(mailId)
            console.log(this.mailsToViewIds)
                // this.mailToViewId = mailId
        }
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