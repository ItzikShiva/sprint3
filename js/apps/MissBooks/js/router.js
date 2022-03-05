import homePage from "./views/home-page.cmp.js"
import aboutPage from "./views/about-page.cmp.js"
import bookAppCmp from "./views/book-app.cmp.js";
import bookDetails from "./views/book-details.cmp.js";

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/books',
        component: bookAppCmp
    },
    {
        path: '/books/:bookId',
        component: bookDetails
    },

];

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});