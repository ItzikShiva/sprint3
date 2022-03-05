
export default {
    template: `
        <header class="app-header-global">
            <div class="logo">
                <h3>Appsus</h3>
            </div>
            <div class="open-menu"></div>
            <nav class="nav-bar" v-if="seen" >
                <router-link to="/">
                    <span class="img-menu-span hover">
                        <img class="menu-img" src="./img/home.png" alt="">
                    </span>
                </router-link> 

                <router-link to="/appsus/note">
                    <span class="img-menu-span hover" >
                        <img class="menu-img" src="./img/notes.png" alt="">
                    </span>
                </router-link> 

                <router-link to="/appsus/mail">
                    <span class="img-menu-span hover">
                        <img class="menu-img" src="./img/email.png" alt="">
                    </span>
                </router-link> 

                <router-link to="/appsus/book">
                    <span class="img-menu-span hover">
                        <img class="menu-img" src="./img/open-book.png" alt="">
                    </span>
                </router-link> 
                <!-- <router-link to="/book">Book Shop</router-link> | -->
                <!-- <router-link to="/about">About</router-link> -->
            </nav>
            <span class="btn-menu" v-on:click="seen = !seen">
                <img class="menu-img-btn" src="./img/menu.png" alt=""></span>
        </header>
    
    `,
    data() {
        return {
            seen: false
            
        }

    }
}