export default {
    props: ['note'],
    template: `

    <section>
        <span>{{this.note.info.title}}</span>
    <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/9BBqNcNqWOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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
