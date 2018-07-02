import Vue from 'vue';
import App from './components/app.vue';

export function createApp(data) {
    // create router instance
    const app = new Vue({
        render: h => h(App, {
            props: {
                tempDataText: data.text
            }
        })
    });
    return { app };
}