import Vue from 'vue';
import moment from 'moment';
import axios from 'axios';
import { API_URL } from '@/constants';
import { DeleteUrlResponse } from '@/types/api';

type Data = {
    shouldHideCard: boolean;
}

export default Vue.extend({
    name: 'List',
    props: {
        url: Object
    },
    data(): Data {
        return {
            shouldHideCard: false
        }
    },
    methods: {
        calculateTime() {
            return moment(this.url.createdAt).fromNow()
        },
        copyUrlToClipboard() {
            navigator
            .clipboard
            .writeText(this.url.shortUrl)
            .then(() => {
                const notificationDiv = document.getElementById("copyNotificationId");
                notificationDiv?.classList.toggle("copy-notification-visible")
                setTimeout(() => notificationDiv?.classList.toggle("copy-notification-visible"), 2000)
            })
        },
        deleteUrl() {
            axios
                .delete<DeleteUrlResponse>(`${API_URL}/delete/${this.url._id}`)
                .then(() => this.shouldHideCard = true)
                .catch(() => alert(`Internal Server Error`));
        }
    }
})