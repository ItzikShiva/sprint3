export default {
    props: ['note'],
    template: `

    <section>
        <div class="field/">
            <span class="field-value" v-show="!showField" @click="focusField" v-bind:style="{backgroundColor: note.style.backgroundColor}">{{note.info.title}}</span>
            <input v-model="note.info.title" v-show="showField" id="user-name" type="text" class="field-value form-control" @focus="focusField" @blur="blurField" v-bind:style="{backgroundColor: note.style.backgroundColor}">
        </div>
        <img :src="bookImgUrl" class="img-card">


    </section>

    `,
    data() {
        return {}
    },
    created() {
        
    },
    methods: { 
            focusField() {
                this.note.info.title;
            },
            blurField() {
                this.editField = '';
            },
            showField() {
                return (this.note.info.title == '' || this.editField == note.info.title)
            } 

    },
    computed: {
        bookImgUrl() {
            return this.note.info.url
        },
    }
}