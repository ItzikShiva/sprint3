

export default {
    props: ['note'],
    template: `

    <section>
        <p>{{note.type}}</p>


    </section>
    
    
    `,

    data() {
        return {
            note: null
        }
    }
}