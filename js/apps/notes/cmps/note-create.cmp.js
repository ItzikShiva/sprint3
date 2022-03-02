export default {
    template: `
        <section class="note-app app-main">
            <input class="input-notes" type="text" :placeholder="placeholderContent" v-model="note.info.txt"/>
            <div class="note-types">
                <span @click="setNopteType('note-txt')">A</span>
                <span @click="setNopteType('note-img')">📷</span>
                <span @click="setNopteType('note-video')">🎥</span>
                <span @click="setNopteType('note-todos')">📃</span>
            </div>
            <button @click="createNote">CREATE</button>
        </section>
    `,
    components: {

    },
    data() {
        return {
            note: {
                type: 'note-txt',
                info: {
                    txt: ""
                },
            },
            placeholderContent: 'write note txt'
        }
    },
    created() {
    },
    methods: {
        setNopteType(type) {
            console.log('type:', type);
            switch (type) {
                case 'note-txt': this.placeholderContent = 'wwrite a text'; break
                case 'note-img': this.placeholderContent = 'insert an image link'; break
                case 'note-video': this.placeholderContent = 'insert a video link'; break
                case 'note-todos': this.placeholderContent = 'write todos seperate by comma'; break
            }

        },
        createNote() {
            if (!this.note.info.txt) return
            this.$emit('create-note', { ...this.note })
        }

    },
    computed: {


    },
};