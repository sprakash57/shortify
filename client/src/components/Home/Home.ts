import Vue from 'vue';
import List from '../List/List.vue';
import axios from 'axios';

export default Vue.extend({
    name: 'Home',
    components: {
        List
    },
    data() {
        return {
            newUrl: '',
            urls: [] as any
        }
    },
    methods: {
        postUrl() {
            axios
                .post('http://localhost:8081/api/create', { inputUrl: this.newUrl })
                .then(response => {
                    if (!response.data.error) this.urls.unshift(response.data);
                    else console.log(response.data.error);
                })
                .catch(error => console.log(error));
            this.newUrl = '';
        }
    },
    mounted() {
        axios
            .get('http://localhost:8081/api')
            .then(response => this.urls = response.data)
            .catch(error => console.log(error.message));
    }
})