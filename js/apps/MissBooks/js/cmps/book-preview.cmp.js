export default {
    props: ['book'],
    template: `
        <section class="book-preview">
            <img class="previewImg" :src="bookImgUrl" alt="">
            <p>{{book.title}}</p>
            <p>{{book.listPrice.amount}} {{book.listPrice.currencyCode}}</p>
            <p></p>
        </section>
    `,
    data() {
        return {}
    },
    created() { },
    methods: {},
    computed: {
        bookImgUrl() {
            return this.book.thumbnail
        },
    }
}