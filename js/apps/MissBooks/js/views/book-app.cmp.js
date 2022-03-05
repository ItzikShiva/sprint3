import { bookService } from "../services/book-service.js"
import bookList from "../cmps/book-list.cmp.js"
import bookFilter from "../cmps/book-filter.cmp.js"
import bookDetails from "./book-details.cmp.js"
import bookAdd from "../cmps/book-add.cmp.js"


export default {
    template: `
    <section class="book-app app-main" >
        <book-add></book-add>
        <book-filter @filtered="setFilter"></book-filter>
        <book-list :books="booksForDisplay" @selected="selectBook"></book-list>
        <book-details @closeBookDetail="onClose" v-if="selectedBook" :book="selectedBook" ></book-details>

    </section>
    `,

    components: {
        bookList,
        bookFilter,
        bookDetails,
        bookAdd
    },
    data() {
        return {
            books: null,
            filterBy: null,
            selectedBook: null,
        }
    },
    created() {
        this.books = bookService.query()
        .then(books => this.books = books)
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        selectBook(book) {
            console.log(book);
            this.selectedBook = book

        },
        onClose() {
            this.selectedBook = null
        }
    },

    computed: {
        booksForDisplay() {
            if (!this.filterBy) return this.books;
            const regex = new RegExp(this.filterBy.title, 'i');
            return this.books.filter(book => regex.test(book.title));
        }

    }


}

