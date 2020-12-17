import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// import icons
const icons = [
    require('@fortawesome/free-solid-svg-icons/faBolt').definition,
    require('@fortawesome/free-solid-svg-icons/faInfo').definition,
    require('@fortawesome/free-solid-svg-icons/faExclamationTriangle').definition,
    require('@fortawesome/free-solid-svg-icons/faMoon').definition,
    require('@fortawesome/free-solid-svg-icons/faSun').definition,
    require('@fortawesome/free-solid-svg-icons/faCopy').definition,
    require('@fortawesome/free-solid-svg-icons/faCopy').definition,
    require('@fortawesome/free-solid-svg-icons/faTrash').definition
];

// Globally register the font awesome component
export function registerFaIcons() {
    library.add(...icons);
    Vue.component('Icon', FontAwesomeIcon);
}
