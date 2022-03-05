import notePreview from "./note-preview.cmp.js";

export default {
  props: ['notes', 'pinnedNotes'],
  template: `

          <section v-if="pinnedNotes.length" class="note-list">
            <p v-if="pinnedNotes" >Pinned!</p>
            <note-preview  :key="idx" v-for="(note,idx) in pinnedNotes" :note="note" @onRemove="removeNote" @onPin="pinToTop" @onDuplicate="onDuplicateNote" :firstBgc="firstBgc">
                    {{note.style.backgroundColor}}

            </note-preview>
          </section>  

          <section class="note-list">
            <p v-if="pinnedNotes.length">Others</p>
            <note-preview  :key="idx" v-for="(note,idx) in notes" :note="note" @onRemove="removeNote" @onPin="pinToTop"  @onDuplicate="onDuplicateNote" :firstBgc="firstBgc">
                    {{note.style.backgroundColor}}

            </note-preview>
          </section>
    
    ` ,


  components: {
    notePreview
  },
  data() {
    return {
      sendBgc: null,
    }
  },
  computed: {
    firstBgc() {
      if (this.note)
        this.sendBgc = this.note.style.backgroundColor
    },
  },
  watch: {
    pinnedNotes: {
      handler() {
        console.log('click');
      }
    }
  }

  ,
  methods: {

    removeNote(id) {
      this.$emit('do-remove', id)
    },

    pinToTop(id) {
      this.$emit('pin-note', id)
    },
    onDuplicateNote(id) {
      console.log('list-check' ,id);
      this.$emit('duplicate-noted', id)
    }
  }
}