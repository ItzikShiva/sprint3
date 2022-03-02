export default {
    props: ['note'],
    template: `

    <section v-if="note">
    <h2>todos note!!!</h2>
        <ul>
            <li>{{note.info.todos}}</li>
        </ul>


    </section>
    
    
    `,
    data() {
        return {}
    },
    created() { },
    methods: {},
    computed: {

        
    }
}