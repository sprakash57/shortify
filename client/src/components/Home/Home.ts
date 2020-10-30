import Vue from 'vue';
import List from '../List/List.vue';
import axios from 'axios';
import { API_URL, URL_PATTERN } from '@/constants';
import { WebUrl } from '@/types/web-url';
import { Mode } from '@/types/theme';
import { WebUrlResponse } from '@/types/api'

type Data = {
    newUrl: string;
    urls: WebUrl[];
    errorMessage: string;
    warningMessage: string;
    mode: Mode;
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
            warningMessage: '',
            mode: Mode.LIGHT
        }
    },
    watch: {
        mode: function (val) {
          this.$emit('changeMode',val)
          const body = document.getElementsByTagName('body')[0]
          val === Mode.DARK ? body.style.backgroundColor = 'black' : body.style.backgroundColor = 'white'
        }
    },
    computed: {
        iconType(): string {
            return (this.mode === Mode.DARK) ? 'sun' : 'moon';
        },
        iconClass(): string {
            return (this.mode === Mode.DARK) ? 'icon--yellow' : 'icon--grey';
        },
    },
    methods: {
        setMode() {
            const setter = (this.mode === Mode.DARK) ? Mode.LIGHT : Mode.DARK
            this.mode = setter
        },
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
    mounted() {
        axios
            .get<WebUrlResponse[]>(API_URL)
            .then(response => this.urls = response.data)
            .catch(() => this.errorMessage = 'hmm... It seems network is broken or server is down 😴');
        this.mode = localStorage.getItem('mode') as Mode || Mode.LIGHT
    }
})
