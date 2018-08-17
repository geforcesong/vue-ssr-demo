import Vue from 'vue';
import App from './components/app.vue';
import createRouter from './vroutes.js';
import { sync } from 'vuex-router-sync';
import { createStore } from './vstore/store.js';

export function createApp(data) {
    // create router instance
    const router = createRouter();
    const store = createStore();
    
    sync(store, router)
    store.state.model = data;

    const app = new Vue({
        router,
        store,
        render: h => h(App)
    });
    return { app, router };
}