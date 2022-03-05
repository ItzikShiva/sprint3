export default {
    template: `
        <header class="app-header-global">
            <div class="logo">
                <h3>Appsus</h3>
            </div>
            <div class="open-menu"></div>
            <nav class="nav-bar" v-if="seen" >
                <router-link to="/">Home</router-link> |
                <router-link to="/appsus/note">Note</router-link> |
                <router-link to="/appsus/mail">Mail</router-link> |
                <router-link to="/appsus/book">MissBooks</router-link> |
                <!-- <router-link to="/book">Book Shop</router-link> | -->
                <!-- <router-link to="/about">About</router-link> -->
            </nav>
            <span class="btn-menu" v-on:click="seen = !seen"><img class="menu-img-btn" src="/img/menu.png" alt=""></span>
        </header>
    
    `,
    data() {
        return {
            seen: true
            
        }

    }
}