export default {
    props: ['note'],
    template: `

    <section>

        <p>{{note.info.title}}</p>
        <img :src="bookImgUrl" class="img-card">


    </section>

    `,
    data() {
        return {}
    },
    created() {
        
    },
    methods: {

    },
    computed: {
        bookImgUrl() {
            return this.note.info.url
        },
    }
}