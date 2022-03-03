export default {
    props: ['note'],
    template: `

    <section>
       <p>{{note.info.txt}}</p>
    </section>
    
    
    `,
    //  <img :style="{width:'50px'}" v-if="isTypeImg" :src="noteImgUrl" alt="">
    //     <div class="todo-list">
    //         <p>{{note.info.label}}</p>
    //         <ul>
    //             <li v-for="note in noteTodos" :key="note.id">{{note.txt}}</li>
    //         </ul>
    //         <button @click="remove(note.id)">close</button>
    //         <input type="color" name="" id="" v-for="note">
    //     </div>

    data() {
        return {
            // note: null
        }
    },
    created() {
    }

}