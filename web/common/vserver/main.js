import Vue from 'vue';
import App from './components/app.vue';
import createRouter from './vroutes.js';

export function createApp(data) {
    // create router instance
    const router = createRouter();
    const app = new Vue({
        router,
        render: h => h(App)
    });
    return { app, router };
}