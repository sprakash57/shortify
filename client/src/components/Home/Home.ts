import Vue from 'vue';
import List from '../List/List.vue';
import axios from 'axios';
import { API_URL, URL_PATTERN } from '@/constants';
import { WebUrl } from '@/types/web-url';
import { WebUrlResponse } from '@/types/api'

type Data = {
    newUrl: string;
    urls: WebUrl[];
    errorMessage: string;
    warningMessage: string;
}

export default Vue.extend({
    name: 'Home',
    components: {
        List
    },
    data(): Data {
        return {
            newUrl: '',
            urls: [],
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
                    .post<WebUrlResponse>(`${API_URL}/create`, { inputUrl: this.newUrl })
                    .then(response => {
                        if (!response.data.error) this.urls.unshift(response.data);
                        else this.errorMessage = response.data.error;
                    })
                    .catch(() => this.errorMessage = 'You might wanna check your network instead!! 😫');
            }
            this.newUrl = '';
        },
        checkForWarnings(): string {
            const pattern = new RegExp(URL_PATTERN, 'gi');
            if (!pattern.test(this.newUrl)) return "Are you sure you've used valid URL ?";
            return '';
        }
    },
    created() {
        axios
            .get<WebUrlResponse[]>(API_URL)
            .then(response => this.urls = response.data)
            .catch(() => this.errorMessage = 'hmm... It seems network is broken or server is down 😴');
    }
})
