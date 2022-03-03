import { mailService } from "../services/mail-service.js";

export default {
    props: [''],
    template: `
        <section class="mail-menu" >
        <button>inbox</button>
        <button>starred</button>
        </section>
    `,
    components: {

    },
    mounted() {},
    data() {
        return {

        }
    },
    components: {

    },
    created() {},
    methods: {

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