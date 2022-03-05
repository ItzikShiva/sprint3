export default {
    template: `
        <section class="notes-filter">
            
            <div class="search-section">
                <input class="global-search" ref="notesInput" @input="setFilter" type="text" v-model="filterBy.txt" placeholder="Search...">
            </div>
            

            <div class="radio-section">
                <input type="radio"  value="note-txt" v-model="filterBy" @click="setFilter">
                <label for="one">All</label>
                <input type="radio"  value="note-txt" v-model="filterBy.type" @change="setFilterByType">
                <label for="one">Text</label>
    
                <input type="radio"  value="note-img" v-model="filterBy.type" @change="setFilterByType">
                <label for="two">Image</label>
    
                <input type="radio"  value="note-todos" v-model="filterBy.type" @change="setFilterByType">
                <label for="three">Todo List</label>
    
                <input type="radio"  value="note-video" v-model="filterBy.type" @change="setFilterByType">
                <label for="three">Video</label>
            </div>
        </section>
    `,
    data() {
        return {
            filterBy: {
                txt: '',
                type: ''
            }
        };
    },
    mounted(){
        this.$refs.notesInput.focus()
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy);
            // console.log(this.filterBy.txt);
        },
        setFilterByType() {
            console.log(' this.filterby.type:', this.filterBy);
            this.$emit('filteredbytype', this.filterBy.type);
        },
    }
}