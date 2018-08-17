import { createApp } from '../main.js';

(_=>{
    const {app} = createApp(window.context);
    app.$mount('#clientapp');
})();