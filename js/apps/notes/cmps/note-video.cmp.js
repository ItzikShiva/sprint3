export default {
    props: ['note'],
    template: `

    <section>
    <div class="field">
            <span class="field-value" v-show="!showField" @click="focusField" v-bind:style="{backgroundColor: note.style.backgroundColor}">{{this.note.info.title}}</span>
            <input v-model="note.info.title" v-show="showField" id="user-name" type="text" class="field-value form-control" @focus="focusField" @blur="blurField" v-bind:style="{backgroundColor: note.style.backgroundColor}">
        </div>
    <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/9BBqNcNqWOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </section>


    
    
    `,

    data() {
        return {
        }
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
        displayVideo() {
            return this.note.info.video
        }
    }

}
