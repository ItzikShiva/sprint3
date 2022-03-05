import { bookService } from "../services/book-service.js"

export default {

    template: `

    <input type="search" @change="getGoogleBooks" v-model="searchStr"><button @click="getGoogleBooks">Search</button>
        <div>
            <li v-for="books in googleBooks">{{books.title}} <button>+</button></li>
        </div>
    
    
    `,

    data() {
        return {
            googleBooks: null,
            searchStr: null

        }
    },
    created() {

    },

    methods: {
        getGoogleBooks() {
            bookService.getGoogleBooks(this.searchStr)
            .then(googleBooks => {
                this.googleBooks = googleBooks.map(gBook => gBook.volumeInfo)
                console.log(this.googleBooks);
            })

        }
    }
}

