export default {
    template: `
        <header class="app-header">
            <div class="logo">
                <h3>Appsus</h3>
            </div>
            <nav class="nav-bar">
                <router-link to="/">Home</router-link> |
                <router-link to="/appsus/note">Note</router-link> |
                <router-link to="/appsus/mail">Mail</router-link> |
                <router-link to="/appsus/book">MissBooks</router-link> |
                <!-- <router-link to="/book">Book Shop</router-link> | -->
                <!-- <router-link to="/about">About</router-link> -->
            </nav>
        </header>
    
    `
}