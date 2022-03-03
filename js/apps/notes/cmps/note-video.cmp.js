export default {
    props: ['note'],
    template: `

    <section>
       
        <iframe width="420" height="315"
            src="displayVideo">
        </iframe>


    </section>
    
    
    `,

    data() {
        return {
        }
    },
    created() {
    },
    computed: {
        displayVideo() {
            return this.note.info.video
        }
    }

}
