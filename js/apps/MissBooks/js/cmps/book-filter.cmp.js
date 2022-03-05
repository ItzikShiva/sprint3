export default {
    template: `
        <section class="book-filter">
            <label>
            Search
            <input @input="setFilter" type="text" v-model="filterBy.title" placeholder="Search...">
            </label>
        </section>
    `,
    data() {
        return {
            filterBy: {
                title: ''
            }
        };
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy);
        }
    }
}