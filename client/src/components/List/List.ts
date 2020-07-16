import Vue from 'vue';
import moment from 'moment';

export default Vue.extend({
    name: 'List',
    props: {
        url: Object
    },
    methods: {
        calculateTime() {
            return moment(this.url.createdAt).fromNow()
        }
    }
})