import { mailService } from '../services/mail-service.js';
import mailList from '../cmps/mail-list.cmp.js'
import mailStatus from '../cmps/mail-status.cmp.js';
import mailFilter from '../cmps/mail-filter.cmp.js';
import mailMenu from '../cmps/mail-menu.cmp.js';
import mailCompose from '../cmps/mail-compose.cmp.js';

// Vue.prototype.$UP = 'My App'
// const UP = '🔼'

export default {
    template: `
        <section class="mail-app app-main">
            <!-- folder-list on the side! aside -->

            <mail-filter @filtered="setFilter" @radioFilter="setFilter"></mail-filter>
            <mail-status :allMails="allMails"></mail-status>
            <div class="mail-menu-list">
                <mail-menu :allMails="mailsForMenu" @menuWasClicked="setMenu"></mail-menu>
                <mail-compose @mailPosted="onMailPosted" v-if="this.isComposeMail"></mail-compose>
                <mail-list v-if="!this.isComposeMail" :mailstoDisplay="mailsForDisplay" :allMails="allMails" @mailDeleted="onDeleteMail" @sorted="setSort"/>
            </div>
           <!-- <router-link to="/car/edit">Add a new car</router-link> -->
        </section>
    `,
    components: {
        mailList,
        mailStatus,
        mailFilter,
        mailMenu,
        mailCompose

    },
    data() {
        return {
            isComposeMail: false,
            allMails: null,
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
        onMailPosted(newComposeMail) {
            // console.log(newComposeMail);
            mailService.postNewMail(newComposeMail)
                .then((mail) => {
                    this.getUpdateAllMails()
                    this.isComposeMail = false
                })
        },

        onDeleteMail(mailId, mailRemovedAt) {
            console.log(this.allMails);
            this.getUpdateAllMails()
        },
        setMenu(currMenuButton) {
            console.log('menu was clicked:', currMenuButton);
            this.currMenuButton = currMenuButton

            this.getUpdateAllMails()

            if (this.currMenuButton === 'newMail') this.isComposeMail = true
            else this.isComposeMail = false
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
            return mailService.query()
                .then(mails => {
                    if (mails.length) this.allMails = mails
                    else {
                        this.allMails = mailService.getMailsHardCoded()

                        mailService.saveMailsToStorage(this.allMails)
                    }
                });
        },
        sortMails(mailsForDisplay) {

            if (this.sortBy.whoIsCurrChange === 'name') {
                if (this.sortBy.name) {
                    mailsForDisplay.sort((firstMail, secondMail) => ((firstMail.from).localeCompare(secondMail.from)))
                } else {
                    mailsForDisplay.sort((firstMail, secondMail) => ((secondMail.from).localeCompare(firstMail.from)))
                }
            }
            if (this.sortBy.whoIsCurrChange === 'date') {
                if (this.sortBy.date) {
                    mailsForDisplay.sort((firstMail, secondMail) => (secondMail.sentAt - firstMail.sentAt))
                } else {
                    mailsForDisplay.sort((firstMail, secondMail) => (firstMail.sentAt - secondMail.sentAt))
                }
            }
            if (this.sortBy.whoIsCurrChange === 'star') {
                if (this.sortBy.star) {
                    console.log(mailsForDisplay);
                    mailsForDisplay.sort((firstMail, secondMail) => (Number(firstMail.isStar) - Number(secondMail.isStar)))
                } else {
                    mailsForDisplay.sort((firstMail, secondMail) => (Number(secondMail.isStar) - Number(firstMail.isStar)))
                }
            }
            return mailsForDisplay
        },
    },
    computed: {
        mailsForMenu() {
            return this.allMails
        },
        mailsForDisplay() {
            // console.log('get into mailsForDisplay() func');
            var mailsForDisplay = this.allMails
                // if (this.allMails && !this.currMenuButton === 'trashed')
                //     mailsForDisplay = mailsForDisplay.filter(mail => (!mail.removeAt));

            // **************search***********
            if (this.filterByWords) {
                const regex = new RegExp(this.filterByWords, 'i');
                mailsForDisplay = this.allMails.filter(mail => (
                    regex.test(mail.body) || regex.test(mail.subject)
                ));
            }

            // *************RADIO-FILTERS***********
            if (this.filterByRadio === 'Read') {
                mailsForDisplay = mailsForDisplay.filter(mail => (mail.isRead));
            } else if (this.filterByRadio === 'unRead') {
                mailsForDisplay = mailsForDisplay.filter(mail => (!mail.isRead));
            }

            // ****************MENU-BUTTONS***********
            if (this.currMenuButton === 'starred') {
                mailsForDisplay = mailsForDisplay.filter(mail => (mail.isStar && !mail.removeAt));
            } else if (this.currMenuButton === 'inbox') {
                mailsForDisplay = mailsForDisplay.filter(mail => (!mail.removeAt));
            } else if (this.currMenuButton === 'trashed') {
                mailsForDisplay = mailsForDisplay.filter(mail => (mail.removeAt));
                console.log('trashed!', mailsForDisplay);
            }
            if (this.currMenuButton === 'allMails') {
                mailsForDisplay = this.allMails
            }


            // *************SORT-BY**********
            if (mailsForDisplay) mailsForDisplay = this.sortMails(mailsForDisplay)

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
// isView: false,
// isStar: false
//