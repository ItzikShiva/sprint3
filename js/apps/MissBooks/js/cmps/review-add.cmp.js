


export default {
    props: ['book'],
    template: `
    <section v-if="book" class="all-review-form">
        <form @submit.prevent>
            <input type="text" v-model="newReview.name" >
            <input type="date" v-model="newReview.date">
            <textarea v-model="newReview.textArea"></textarea>
            
            <button v-on:click="onAddReview">submit</button>
        </form >
        <ul>
            <div class="review-form">
                <span v-for="review in book.reviews">Name: {{review.name}}</span><br>
                <span v-for="review in book.reviews">Date: {{review.date}}</span>
                <span v-for="review in book.reviews">Review: {{review.textArea}} </span>
                <button>Remove Review</button>
            </div>
        </ul>
    </section>
    `,
    data() {
        return {
           newReview: {
               name: '',
               date: new Date().toISOString().slice(0, 10),
               textArea: ''
           },
        }
    },

    methods: {
        onAddReview() {
            this.$emit('reviewAdded', this.newReview)
            this.newReview= {
                txt: '',
                date: new Date().toISOString().slice(0, 10),
                textArea: ''
            }
        },

      
    }
}

