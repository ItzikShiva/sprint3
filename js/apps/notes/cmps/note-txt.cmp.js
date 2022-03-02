export default {
    props: ['note'],
    template: `

    <section>
        <h2>txt note!!!</h2>
        <p>{{note.info.txt}}</p>


    </section>
    
    
    `,

    data() {
        return {
            // note: null
        }
    }
}