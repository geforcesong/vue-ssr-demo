import Vue from 'vue';
import application from '../components/app.vue';

class HomeController {
    constructor() {
        const app = new Vue({
            render: h => h(application)
        })
        app.$mount('#clientapp')
    }
}

new HomeController();