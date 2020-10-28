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
    }
})