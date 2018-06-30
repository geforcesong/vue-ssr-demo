import Vue from 'vue';
import App from './components/app.vue';

export function createApp() {
    // create router instance
    const app = new Vue({
        render: h => h(App)
    });

    return { app };
}