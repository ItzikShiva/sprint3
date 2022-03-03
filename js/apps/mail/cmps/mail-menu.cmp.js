import { mailService } from "../services/mail-service.js";

export default {
    props: ['allMails'],
    template: `
        <section class="mail-menu" >
        <button @click="menuClick" value="inbox">Inbox</button>
        <button @click="menuClick" value="starred">Starred</button>
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
            // console.log(ev.target.value);
            // console.log(this.currMenuButton);
            this.currMenuButton = ev.target.value
            this.$emit('menuWasClicked', this.currMenuButton);
        }
    },
    computed: {

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