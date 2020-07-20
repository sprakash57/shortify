import Vue from 'vue';
import List from '../List/List.vue';
import axios from 'axios';
import { API_URL, URL_PATTERN } from '@/constants';

export default Vue.extend({
    name: 'Home',
    components: {
        List
    },
    data() {
        return {
            newUrl: '',
            urls: [] as any[],
            errorMessage: '',
            warningMessage: ''
        }
    },
    methods: {
        postUrl() {
            this.warningMessage = this.checkForWarnings();
            console.log(this.warningMessage);
            if (this.warningMessage === '') {
                axios
                    .post(`${API_URL}/create`, { inputUrl: this.newUrl })
                    .then(response => {
                        if (!response.data.error) this.urls.unshift(response.data);
                        else this.errorMessage = response.data.error;
                    })
                    .catch(error => this.errorMessage = 'You might wanna check your network instead!! 😫');
            }
            this.newUrl = '';
        },
        checkForWarnings(): string {
            const pattern = new RegExp(URL_PATTERN, 'gi');
            if (!pattern.test(this.newUrl)) return "Are you sure you've used valid URL ?";
            return '';
        }
    },
    mounted() {
        axios
            .get(API_URL)
            .then(response => this.urls = response.data)
            .catch(error => this.errorMessage = 'hmm... It seems network is broken or server is down 😴');
    }
})