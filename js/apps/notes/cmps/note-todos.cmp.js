export default {
    props: ['note'],
    template: `

    <section v-if="note">
    <h2 >todos note!!!</h2>
        <ul >
            <li v-for="note in note.info.todos">{{note.txt}}</li>
        </ul>
    </section>
    
    
    `,
    data() {
        
    }
}