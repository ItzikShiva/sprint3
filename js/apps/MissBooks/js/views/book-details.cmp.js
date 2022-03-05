import { bookService } from "../services/book-service.js";
import reviewAddCmp from "../cmps/review-add.cmp.js";

export default {
   
    template: `

    <section class="book-details" v-if="book">
        <h4>Book Details</h4>
        <img :src="bookImgUrl" alt="">
        <p>Authors: {{book.authors}}</p>
        <p>Categories: {{book.categories}}</p>

        <p>Description: <span v-if="!readMoreActivated">{{book.description.slice(0,100)}}</span>
        <a v-if="!readMoreActivated" @click="active" class="readMore"> Read More...</a>
        <span v-if="readMoreActivated">{{book.description}}</span>
        <a v-if="readMoreActivated" @click="passive" class="readMore">Show Less..</a></p>
        
        <p>Id: {{book.id}}</p>
        <p>Language: {{book.language}}</p>
        <p>Subtitle: {{book.subtitle}}</p>
        <p>Book Count: <span> {{pageCounter}}</span></p>
        <p>Publish Date: <span> {{book.publishedDate}} - {{publishedDate}}</span></p>
        <p>Price: <span :class="bookPrice">{{book.listPrice.amount}}</span><span>{{book.listPrice.currencyCode}}</span></p>
        <p>Sale: <span>{{onSale}}</span></p>
        <p>Title: {{book.title}}</p>
        <review-add-cmp :book="book" @reviewAdded="addReview"></review-add-cmp>
        <!-- <button @click="closeButton">X</button> -->
        <router-link to="/books">Back to Books</router-link>
    </section>
    `,

    components: {
        reviewAddCmp

    },

    data() {
        return {
            readMoreActivated: false,
            book: null,
            
        }
    },
    
    created() {
        const id = this.$route.params.bookId;
        bookService.get(id)
            .then(book => this.book = book);    
        },

    methods: {
        closeButton() {
            this.$emit('closeBookDetail')
        },
        active(){
            this.readMoreActivated = true;
        },
        passive() {
            this.readMoreActivated = false;
        },
        addReview(review){
            bookService.addReview(this.book.id, review)
            .then(book => {
                this.book = book
                console.log(this.book);
            })
        }



    },
    computed: {

        bookImgUrl() {
            return this.book.thumbnail
        },
        pageCounter() {
            if (this.book.pageCount > 500) return "Long Reading"
            if (this.book.pageCount < 500 && this.book.pageCount > 200) return "Decent Reading"
            if (this.book.pageCount < 100) return "Light Reading"
        },
        bookPrice() {
            if (this.book.listPrice.amount > 150) return "red"
            else if (this.book.listPrice.amount < 20) return "green"
        },

        publishedDate() {
            if(this.book.publishedDate > 10) return "Veteran Book"
            if(this.book.publishedDate < 1) return "New"

        },
        onSale() {
            if(this.book.listPrice.isOnSale) return "SALE"
            if(!this.book.listPrice.isOnSale) return "Not On Sale"

        },



    }

}
