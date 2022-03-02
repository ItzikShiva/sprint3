import { mailService } from '../services/mail-service.js';
// import { bookService } from '../services/book-service.js'
//import eventbus???
// import bookFilter from '../cmps/book-filter.cmp.js';
import mailList from '../cmps/mail-list.cmp.js'
// import bookAdd from './book-add.cmp.js';


export default {
    template: `
        <section class="mail-app app-main">
            <!-- <car-filter @filtered="setFilter" /> -->
            <!-- folder-list on the side! aside -->
            <mail-list :mails="mailsForDisplay" />
           <!-- <router-link to="/car/edit">Add a new car</router-link> -->
        </section>
    `,
    components: {
        mailList,
        // bookList,
        // bookAdd
    },
    data() {
        return {
            mails: [{
                    id: 'e102',
                    from: 'ron',
                    subject: 'Miss you! Miss you! Miss you!',
                    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ducimus?',
                    isRead: false,
                    sentAt: 155164560594,
                    to: 'momo@momo.com'
                },
                {
                    id: 'e1013',
                    from: 'or',
                    subject: 'shiva! shiva! shiva! shiva! shiva!',
                    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, cum!',
                    isRead: false,
                    sentAt: 15511339645694,
                    to: 'momo@momo.com'
                },
                {
                    id: 'e104',
                    from: 'dor',
                    subject: 'dsadsu! dsadsu! dsadsu!dsadsu!',
                    body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nisi consequatur facilis ipsam.',
                    isRead: false,
                    sentAt: 1551133930594,
                    to: 'momo@momo.com'
                },
            ]
        };
    },
    created() {

    },
    methods: {

    },
    computed: {
        mailsForDisplay() {
            return this.mails
                // if (!this.filterBy) return this.cars;
                // const regex = new RegExp(this.filterBy.vendor, 'i');
                // return this.cars.filter(car => regex.test(car.vendor));
        }
    },
};