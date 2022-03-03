export default {
    template: `
        <section class="mail-sort">
            <button @click="sortByWhat" value="name">name {{sign}}</button>
            
            <strong>date</strong>
            <strong></strong>
            <strong></strong>

            <!-- <input @input="setFilter" type="text" v-model="filterBy.words" placeholder="Search..."> </span> -->
        </section>
    `,
    data() {
        return {
            sortBy: {
                name: false,
                date: true
            }
        };
    },
    methods: {
        sortByWhat(ev) {
            var sortByType = ev.target.value
            if (sortByType === 'name') {
                this.sortBy.name = !this.sortBy.name
            }
            // console.log(this.sortBy);
            this.$emit('sorted', this.sortBy);
        },

    }
}