export default {
    template: `
        <section class="mail-filter">
            <label>
            Filter By </label>
            <span class="mail-serch"> <b>Search (subject and body): </b>
            <input @input="setFilter" type="text" v-model="filterBy.words" placeholder="Search..."> </span>
            
            <!-- ++++++++++++++++filter by READ \UNREAD+++++++++++++++ -->


            <input type="radio" id="one" value="All" v-model="picked" @click="radioFilter">
            <label for="one">All</label>

            <input type="radio" id="two" value="Read" v-model="picked" @click="radioFilter">
            <label for="two">Read</label>

            <input type="radio" id="three" value="unRead" v-model="picked" @click="radioFilter">
            <label for="three">unRead</label>
            <br>
            <span>Show: {{ picked }}</span>
        </section>
    `,
    data() {
        return {
            picked: 'All',
            filterBy: {
                words: '',
                radio: ''
            }
        };
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy);
        },
        radioFilter(ev) {
            this.filterBy.radio = ev.target.value
            this.$emit('radioFilter', this.filterBy);
        }

    }
}