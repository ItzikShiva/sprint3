import { mailService } from '../services/mail-service.js';
import mailList from '../cmps/mail-list.cmp.js'
import mailStatus from '../cmps/mail-status.cmp.js';
import mailFilter from '../cmps/mail-filter.cmp.js';
import mailMenu from '../cmps/mail-menu.cmp.js';


export default {
    template: `
        <section class="mail-app app-main">
            <!-- folder-list on the side! aside -->

            <mail-filter @filtered="setFilter" @radioFilter="setFilter"></mail-filter>
            <mail-status :allMails="allMails"></mail-status>
            <div class="mail-menu-list">
                <mail-menu :allMails="allMails" @menuWasClicked="setMenu"></mail-menu>
                <mail-list :mailstoDisplay="mailsForDisplay" :allMails="allMails" @mailDeleted="onDeleteMail" @sorted="setSort"/>
            </div>
           <!-- <router-link to="/car/edit">Add a new car</router-link> -->
        </section>
    `,
    components: {
        mailList,
        mailStatus,
        mailFilter,
        mailMenu

    },
    data() {
        return {
            allMails: null,
            // mailstoDisplay: null,
            filterByWords: null,
            filterByRadio: null,
            currMenuButton: null,
            sortBy: {
                name: false,
                date: true
            }
        };
    },
    created() {
        this.getUpdateAllMails()
    },
    methods: {
        onDeleteMail(mailId) {
            mailService.remove(mailId)
                .then(mail => {
                    this.getUpdateAllMails()
                })
        },
        setMenu(currMenuButton) {
            console.log('yes', currMenuButton);
            this.currMenuButton = currMenuButton

            // this.mailsForDisplay()
        },
        setSort(sortBy) {
            // console.log(sortBy);
            this.sortBy = sortBy
        },
        setFilter(filterBy) {
            this.filterByWords = filterBy.words;
            this.filterByRadio = filterBy.radio;
        },
        getUpdateAllMails() {
            mailService.query()
                .then(mails => {
                    if (mails.length) this.allMails = mails
                    else {
                        this.allMails = mailService.getMailsHardCoded()
                        mailService.saveMailsToStorage(this.allMails)
                    }
                });
        },

    },
    computed: {
        mailsForDisplay() {
            console.log('checking mailsForDisplay()');

            var mailsForDisplay = this.allMails;

            if (this.filterByWords) {
                const regex = new RegExp(this.filterByWords, 'i');
                mailsForDisplay = this.allMails.filter(mail => (
                    regex.test(mail.body) || regex.test(mail.subject)
                ));
            }

            if (this.filterByRadio === 'Read') {
                mailsForDisplay = mailsForDisplay.filter(mail => (mail.isRead));
            } else if (this.filterByRadio === 'unRead') {
                mailsForDisplay = mailsForDisplay.filter(mail => (!mail.isRead));
            }

            if (this.currMenuButton === 'starred') {
                mailsForDisplay = mailsForDisplay.filter(mail => (mail.isStar));
            }

            if (mailsForDisplay) {
                if (!this.sortBy.name) {
                    //something wrong here, its come to this component, but not to here!
                    console.log('check');
                    mailsForDisplay.sort((firstMail, secondMail) => (firstMail - secondMail))
                }
            }


            // this.mailstoDisplay = mailsForDisplay
            return mailsForDisplay
        },
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
//