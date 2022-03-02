import { utilService } from "../../../services/util-service.js";
import { mailService } from "../services/mail-service.js";

export default {
    props: ['mail'],
    template: `
        <section class="mail-view">

        {{mail}}
                <!-- <strong>{{mail.from}}</strong> 
                <strong>{{mail.subject}}</strong>
                <span>
                    {{mail.body}}
                </span>
                <span>
                    {{sentTime}}
                </span> -->
            
            
        </section>
    `,
    data() {
        return {
            mailToView: null
        }
    },
    created() {
        // getmail by id
    },
    methods: {

    },
    computed: {

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