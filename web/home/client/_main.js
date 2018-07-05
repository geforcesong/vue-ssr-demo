import Vue from 'vue';
import application from '../components/app.vue';

class HomeController {
    constructor() {
        const app = new Vue({
            render: h => h(application, {
                props: {
                    tempDataText: 'abcd',
                    hideSubHeader: true
                }
            }),
        })
        app.$mount('#clientapp')
        // application.$mount('#app')
    }
}

new HomeController();