import { mailService } from "../services/mail-service.js";

export default {
    props: ['allMails'],
    template: `
        <section class="mail-menu">
        <button @click="menuClick" value="newMail">Compose new mail</button>
        <button @click="menuClick" value="allMails">All ({{howManyMailsComputed}})</button>
        <button @click="menuClick" value="inbox">Inbox ({{howManyInboxComputed}})</button>
        <button @click="menuClick" value="starred">Starred ({{howManyStarredComputed}})</button>
        <button @click="menuClick" value="trashed">Trashed ({{howManyTrashedComputed}})</button>
        </section>
    `,
    components: {

    },
    mounted() {},
    data() {
        return {
            currMenuButton: null,
        }
    },
    components: {

    },
    created() {},
    methods: {
        menuClick(ev) {

            this.currMenuButton = ev.target.value
            this.$emit('menuWasClicked', this.currMenuButton);
        }
    },
    computed: {
        howManyMailsComputed() {
            if (!this.allMails) return 0
            return this.allMails.length
        },
        howManyInboxComputed() {
            if (!this.allMails) return 0
            var inboxes = 0;
            this.allMails.forEach(mail => {
                if (!mail.removeAt) inboxes++
            });
            return inboxes
        },
        howManyTrashedComputed() {
            if (!this.allMails) return 0
            var trashed = 0;
            this.allMails.forEach(mail => {
                if (mail.removeAt) trashed++
            });
            return trashed
        },
        howManyStarredComputed() {
            if (!this.allMails) return 0
            var starred = 0;
            this.allMails.forEach(mail => {
                if (mail.isStar) starred++
            });
            return starred
        }
    },
    unmounted() {

    }
}

// {
// id: 'e104',
// from: 'dor',
// subject: 'dsadsu! dsadsu! dsadsu!dsadsu!',
// body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nisi consequatur facilis ipsam.',
// isRead: false,
// sentAt: 1551133930594,
// to: 'momo@momo.com',
// isView: false,
// isStar: false,
// removeAt: null
// },