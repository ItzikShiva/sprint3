import { mailService } from '../services/mail-service.js';
// import { bookService } from '../services/book-service.js'
//import eventbus???
// import bookFilter from '../cmps/book-filter.cmp.js';
import mailList from '../cmps/mails-list.cmp.js'
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
            mails: null,
        };
    },
    created() {
        mailService.query()
            .then(mails => {

                if (mails.length) this.mails = mails
                else {
                    this.mails = mailService.getMailsHardCoded()
                    mailService.saveMailsToStorage(this.mails)
                }
                // console.log(JSON.parse(JSON.stringify(this.mails)));
            });
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