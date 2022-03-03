import notePreview from "./note-preview.cmp.js";

export default {
  props: ['notes'],
  template: `

          <section class="note-list">
            <note-preview  :key="idx" v-for="(note,idx) in notes" :note="note" @onRemove="removeNote" :firstBgc="firstBgc">
{{note.style.backgroundColor}}

            </note-preview>
          </section>
    
    ` ,


  components: {
    notePreview
  },
  data() {
    return {
sendBgc:null,
    }
  },
  computed: {
    firstBgc() {
      if (this.note)
     this.sendBgc = this.note.style.backgroundColor
    },
  },
  methods: {
    // remove(id) {
    //   console.log('trying to remove', id);
    //   this.$emit('remove', id)

    // },
    removeNote(id) {
      console.log('tryingggggggg to remove', id);
      // noteService.removeNote(id)
      this.$emit('doRemove', id)
    }

  }
}