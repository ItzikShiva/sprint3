
import { router } from "./router.js";
import bookCmp from "./views/book-app.cmp.js";
import appFooter from "./cmps/app-footer.cmp.js";
import appHeader from "./cmps/app-header.cmp.js";

const options = {
    template: `
            <app-header/>
            <router-view/>
            <app-footer/>
    `,
    components: {
        bookCmp,
        appFooter,
        appHeader
    }
};



const app = Vue.createApp(options);
app.use(router)
app.component('book-app', bookCmp)
app.component('app-footer', appFooter)
app.component('app-header', appHeader)
app.mount('#app');