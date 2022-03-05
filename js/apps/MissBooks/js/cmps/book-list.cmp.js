import bookPreview from "./book-preview.cmp.js"

export default {
    props: ['books'],
    template: `

    <section class="book-list">
        <ul>
            <li v-for="book in books" :key="book.id" class="book-preview-container">
                <book-preview :book="book"></book-preview>
                <!-- <button @click="select(book)"> More Details</button> -->
                <router-link :to="'/books/'+book.id">Details</router-link>
                <div class="actions">
                   </div>
            </li>
        </ul>
    </section>
    
    ` ,
    components: {
        bookPreview
    },

    methods: {
        select(book) {
            console.log(book);
            this.$emit('selected', book)
        },

    }
}