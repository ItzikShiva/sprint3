import { noteService } from "../services/note-service.js";

export default {
    props: ['note'],
    template: `

    <section>
        <div class="field">
            <span class="field-value" v-show="!showField" @click="focusField" v-bind:style="{backgroundColor: note.style.backgroundColor}">{{note.info.txt}}</span>
            <input v-model="note.info.txt" v-show="showField" id="user-name" type="text" class="field-value form-control" @focus="focusField" @blur="blurField" v-bind:style="{backgroundColor: note.style.backgroundColor}">
        </div>

    </section>
    
    
    `,

    methods: {

        focusField() {
            console.log('hhfgfgh');
            // this.note.info.txt;
        },
        blurField() {
            this.editField = '';
            console.log('hhh');
        },
        showField() {
            return (this.note.info.txt == '' || this.editField == note.info.txt)
        }
    }
}