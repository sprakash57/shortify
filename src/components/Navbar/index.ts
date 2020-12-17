import Vue from "vue";
import { MODE } from "@/constants";

type Data = {
    mode: string;
}

export default Vue.extend({
    name: "Navbar",
    data(): Data {
        return {
            mode: MODE.LIGHT
        };
    },
    watch: {
        mode(val) {
            this.$emit("changeMode", val);
            const body = document.getElementsByTagName("body")[0];
            body.style.backgroundColor = val === MODE.LIGHT ? "white" : "black";
        },
    },
    methods: {
        setMode() {
            this.mode = this.mode === MODE.LIGHT ? MODE.DARK : MODE.LIGHT;
        },
    },
    computed: {
        iconType() {
            return this.mode === MODE.LIGHT ? "sun" : "moon";
        },
        iconClass() {
            return this.mode === MODE.LIGHT ? "icon--yellow" : "icon--grey";
        },
        currentTheme() {
            return `${this.mode} theme`;
        }
    },
    created() {
        this.mode === (localStorage.getItem("mode") as MODE) || MODE.LIGHT;
    },
});