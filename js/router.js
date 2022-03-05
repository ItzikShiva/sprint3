// import appsusApp from './views/app-sus.cmp.js';
import homePage from './views/home-page.cmp.js'
import mailApp from './apps/mail/views/mail-app.cmp.js'
import notesApp from './apps/notes/views/note-app.cmp.js'
import bookApp from './apps/MissBooks/js/views/book-app.cmp.js'
import bookDetails from './apps/MissBooks/js/views/book-details.cmp.js'
// import bookApp from './views/book-app.cmp.js';
// import aboutPage from './views/about-page.cmp.js'
// import bookDetails from './views/book-details.cmp.js';
// import bookAdd from './views/book-add.cmp.js';
// import carEdit from './views/car-edit.cmp.js';

const routes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/appsus/note',
        component: notesApp
    },
    {
        path: '/appsus/mail',
        component: mailApp
    },
    {
        path: '/appsus/book',
        component: bookApp
    },
    {
        path: '/books/:bookId',
        component: bookDetails
    },

    // {
    //     path: '/appsus/smail/add',
    //     component: missAdd
    // },
    // {
    //     path: '/car/edit/:carId?',
    //     component: carEdit
    // },
];

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});