export default {
    props: ['note'],
    template: `

    <section v-if="note">

        <p>{{note.info.title}}</p>
        <img class="previewImg" :src="bookImgUrl" alt="" class="img-card">


    </section>
    
    
    `,
    data() {
        return {}
    },
    created() { },
    methods: {},
    computed: {
        bookImgUrl() {
            return this.note.info.url
        },
    }
}