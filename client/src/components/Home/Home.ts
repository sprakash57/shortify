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
            urls: [] as any,
            errorMessage: ''
        }
    },
    methods: {
        postUrl() {
            axios
                .post('http://localhost:8081/api/create', { inputUrl: this.newUrl })
                .then(response => {
                    if (!response.data.error) this.urls.unshift(response.data);
                    else this.errorMessage = response.data.error;
                })
                .catch(error => this.errorMessage = 'You might wanna check your network instead!! 😫');
            this.newUrl = '';
        }
    },
    mounted() {
        axios
            .get('http://localhost:8081/api')
            .then(response => this.urls = response.data)
            .catch(error => this.errorMessage = 'hmm... It seems network is broken or server is down 😴');
    }
})