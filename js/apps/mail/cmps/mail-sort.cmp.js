export default {
    template: `
        <section class="mail-sort">
            <strong>Sort By:</strong>
            <button @click="sortByWhat" value="name">name {{this.currSign.name}}</button>
            <button @click="sortByWhat" value="date">date {{this.currSign.date}}</button>
            <button @click="sortByWhat" value="star">Starred {{this.currSign.star}}</button>
            <!-- <input @input="setFilter" type="text" v-model="filterBy.words" placeholder="Search..."> </span> -->
        </section>
    `,
    data() {
        return {
            currSign: {
                name: '🔼',
                date: '🔽',
                star: '🔼'
            },
            sortBy: {
                name: false,
                date: true,
                star: false,
                whoIsCurrChange: null
            }
        };
    },
    created() {},
    methods: {
        sortByWhat(ev) {
            var sortByType = ev.target.value
            if (sortByType === 'name') {
                this.sortBy.name = !this.sortBy.name
                this.currSign.name = this.currSign.name === '🔼' ? '🔽' : '🔼'
                this.sortBy.whoIsCurrChange = 'name'
            }
            if (sortByType === 'date') {
                this.sortBy.date = !this.sortBy.date
                this.currSign.date = this.currSign.date === '🔼' ? '🔽' : '🔼'
                this.sortBy.whoIsCurrChange = 'date'
            }
            if (sortByType === 'star') {
                this.sortBy.star = !this.sortBy.star
                this.currSign.star = this.currSign.star === '🔼' ? '🔽' : '🔼'
                this.sortBy.whoIsCurrChange = 'star'
            }
            this.$emit('sorted', this.sortBy);
        },

    },
    computed: {
        sign() {
            // this.currSign = this.currSign === '🔼' ? '🔽' : '🔼'
            // console.log(this.currSign);
            return this.currSign
        }
    },
}